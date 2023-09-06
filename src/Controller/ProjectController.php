<?php

namespace App\Controller;

use App\Entity\Project;
use App\Form\AddProjectType;
use App\Repository\ProjectRepository;
use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * Require ROLE_USER for all the actions of this controller
 *
 * @IsGranted("ROLE_USER")
 */

class ProjectController extends AbstractController
{
    /**
     * @Route("/project", name="app_project")
     */
    public function index(ProjectRepository $projectRepository): Response
    {
        $allProjects = $projectRepository->findProjectOrderedByCreatedDate();

        return $this->render('project/list.html.twig', [
            "allProjects" => $allProjects,
        ]);
    }

    /**
     * @Route("/project/{id}", name="app_project_display")
     */
    public function displayAproject(int $id, ProjectRepository $projectRepository): Response
    {
        $currentProject = $projectRepository->find($id);

        return $this->render('project/list.html.twig', [
            "currentProject" => $currentProject,
        ]);
    }    

    /**
     * @Route("/add/project", name="app_add_project")
     */
    public function addProject(Request $request, EntityManagerInterface $em): Response
    {

        $project = new Project();
        $currentUser = $this->getUser();

        $form = $this->createForm(AddProjectType::class, $project);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $project->setName($data->getName());
            $project->setSummary($data->getSummary());
            $project->setDescription($data->getDescription());
            $project->setCreatedAt(new DateTimeImmutable());
            $project->setStudyLevel($data->getStudyLevel());

            foreach ($data->getTechnologies() as $technology)
            {
                $project->addTechnology($technology);
            };

            $project->setNeedDescription($data->getNeedDescription());
            $project->setDuration($data->getDuration());
            $project->setStatus($data->getStatus());
            $project->setTimeNecessaryWeek($data->getTimeNecessaryWeek());
            $project->setImage($data->getImage());
            $project->setUser($currentUser);


            $em->persist($project);
            $em->flush();

            $this->addFlash("success", "Votre projet est maintenant en ligne !");
            return $this->redirectToRoute('app_project');
        }

        return $this->render('project/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
