<?php

namespace App\Controller;

use App\Entity\Project;
use App\Form\AddProjectType;
use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    /**
     * @Route("/project", name="app_project")
     */
    public function index(): Response
    {
        return $this->render('project/projectsList.html.twig', [
            'controller_name' => 'ProjectController',
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

            return $this->redirectToRoute('task_success');
        }

        return $this->render('project/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
