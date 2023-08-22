<?php

namespace App\Controller;

use App\Form\EditCurrentUserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

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
    public function delete(UserRepository $userRepository, Request $request, TokenStorageInterface $tokenStorage): Response
    {
        $currentUser = $this->getUser();
        $userRepository->remove($currentUser, true);

        // This part is needed to kill the session's user before the redirection
        $request->getSession()->invalidate();
        $this->container->get("security.token_storage")->setToken(null);

        return $this->redirectToRoute('app_home');
    }

    /**
     * @Route("/mes-informations/edit", name="app_current_user_edit")
     */
    public function edit(UserRepository $userRepository, Request $request, EntityManagerInterface $em): Response
    {
        $currentUserId = $this->getUser()->getId();
        
        $currentUser = $userRepository->find(["id" => $currentUserId]);
        

        $form = $this->createForm(EditCurrentUserType::class, $currentUser);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $data = $form->getData();

            $currentUser->setUsername($data->getUsername());
            $currentUser->setStudyLevel($data->getStudyLevel());
            $currentUser->setTimeAvailableWeek($data->getTimeAvailableWeek());

            foreach ($data->getTechnologies() as $technology)
            {
                $currentUser->addTechnology($technology);
            };

            $em->flush($currentUser);

            return $this->redirectToRoute("app_current_user_informations");
            
        }

        return $this->render('current_user/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
