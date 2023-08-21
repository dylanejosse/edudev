<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(ProjectRepository $projectRepository): Response
    {
        $latestProject = $projectRepository->findLatestProject();

        return $this->render('home/index.html.twig', [
            "latestProject" => $latestProject,
        ]);
    }

    /**
     * @Route("/a-propos-de-nous", name="app_home_about_us")
     */
    public function aboutUs(): Response
    {
        return $this->render('home/aboutUs.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
