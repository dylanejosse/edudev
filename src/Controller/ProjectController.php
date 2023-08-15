<?php

namespace App\Controller;

use App\Entity\Project;
use App\Form\AddProjectType;
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
    public function addProject(Request $request): Response
    {

        $project = new Project();

        $form = $this->createForm(AddProjectType::class, $project);

        return $this->render('project/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
