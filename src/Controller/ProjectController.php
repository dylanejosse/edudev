<?php

namespace App\Controller;

use App\Entity\Project;
use App\Form\AddProjectType;
use App\Form\EditProjectType;
use App\Repository\ProjectRepository;
use App\Repository\UserRepository;
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
     * @Route("/project", name="app_project_list")
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
    public function displayAproject(int $id, ProjectRepository $projectRepository, UserRepository $userRepository): Response
    {
        $currentProject = $projectRepository->find($id);

        $projectOwner = $userRepository->find($currentProject->getUser());

        $currentUser = $this->getUser();

        return $this->render('project/singleProject.html.twig', [
            "currentProject" => $currentProject,
            "projectOwner" => $projectOwner,
            "currentUser" => $currentUser,
        ]);
    }
    
    /**
     * @Route("/project/{id}/delete", name="app_project_delete")
     */
    public function delete(int $id, ProjectRepository $projectRepository, EntityManagerInterface $em): Response
    {
        $currentProject = $projectRepository->find($id);

        if ($this->getUser() === $currentProject->getUser())
        {
            $em->remove($currentProject);
            $em->flush();

            $this->addFlash('success', 'Votre projet a bien été supprimé !');
            return $this->redirectToRoute('app_current_user_projects');
        }
    }

    /**
     * @Route("/project/{id}/edit", name="app_project_edit")
     */
    public function edit(int $id, ProjectRepository $projectRepository, Request $request, EntityManagerInterface $em): Response
    {
        $currentProject = $projectRepository->find($id);

        $form = $this->createForm(EditProjectType::class, $currentProject);

        $form->handleRequest($request);

        if ($this->getUser() === $currentProject->getUser()) 
        {
            if ($form->isSubmitted() && $form->isValid()) {
                $data = $form->getData();

                $currentProject->setName($data->getName());
                $currentProject->setSummary($data->getSummary());
                $currentProject->setDescription($data->getDescription());
                $currentProject->setUpdatedAt(new DateTimeImmutable());
                $currentProject->setStudyLevel($data->getStudyLevel());
                $currentProject->setNeedDescription($data->getNeedDescription());
                $currentProject->setDuration($data->getDuration());
                $currentProject->setStatus($data->getStatus());
                $currentProject->setTimeNecessaryWeek($data->getTimeNecessaryWeek());
                $currentProject->setImage($data->getImage());

                foreach ($data->getTechnologies() as $technology) {
                    $currentProject->addTechnology($technology);
                };

                $em->flush($currentProject);

                $this->addFlash('success', 'Votre projet a bien été modifié !');
                return $this->redirectToRoute('app_current_user_projects');
            }
        }

        return $this->render('project/edit.html.twig', [
            'form' => $form->createView(),
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
            
            $project->setCreatedAt(new DateTimeImmutable());
            $project->setUser($currentUser);

            $em->persist($project);
            $em->flush();

            $this->addFlash("success", "Votre projet est maintenant en ligne !");
            return $this->redirectToRoute('app_project_list');
        }

        return $this->render('project/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
