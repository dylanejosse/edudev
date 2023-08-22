<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CurrentUserController extends AbstractController
{
    /**
     * @Route("/mes-informations", name="app_current_user_informations")
     */
    public function read(UserRepository $userRepository): Response
    {
        $currentUser = $userRepository->find($this->getUser());

        return $this->render('current_user/index.html.twig', [
            'currentUser' => $currentUser,
        ]);
    }

    /**
     * @Route("/mes-informations/delete", name="app_current_user_delete")
     */
    public function delete(UserRepository $userRepository): Response
    {
        $currentUser = $this->getUser();
        $userRepository->remove($currentUser, true);

        return $this->redirectToRoute('app_logout');
    }
}
