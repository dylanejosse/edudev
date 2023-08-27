<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
    public function delete(UserRepository $userRepository, Request $request): Response
    {
        $currentUser = $this->getUser();
        $userRepository->remove($currentUser, true);

        // This one is needed to kill the session's user before the redirection
        $this->get('security.token_storage')->setToken(null);
        $request->getSession()->invalidate();
        return $this->redirectToRoute('app_home');
    }
}
