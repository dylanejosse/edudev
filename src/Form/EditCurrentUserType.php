<?php

namespace App\Form;

use App\Entity\Technology;
use App\Entity\User;
use App\Repository\TechnologyRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EditCurrentUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', TextType::class, [
                'label' => "Votre nom d'utilisateur"
            ])
            ->add('study_level', ChoiceType::class, [
                'label' => "Votre niveau d'études",
                'placeholder' => "Choisissez une option",
                'choices' => [
                    "Autodidacte" => "Autodidacte",
                    "Bac + 2" => "Bac + 2",
                    "Bac + 3" => "Bac + 3",
                    "Bac + 5" => "Bac + 5"
                ]
                ])
            
            ->add('time_available_week', ChoiceType::class, [
            'label' => 'Estimation du temps que vous souhaitez consacrer à des projets tech par semaine',
            'placeholder' => "Choisissez une option",
            'choices' => [
                "Moins de 5 heures" => "Moins de 5 heures",
                "Entre 5 et 15 heures" => "Entre 5 et 15 heures",
                "Entre 15 et 30 heures" => "Entre 15 et 30 heures",
                "Plus de 30 heures" => "Plus de 30 heures"
                ]
            ])

            ->add('technologies', EntityType::class, [
                'class' => Technology::class,
                // Sort all technologies by name
                'query_builder' => function (TechnologyRepository $tr): QueryBuilder {
                    return $tr->createQueryBuilder('t')
                        ->orderBy('t.name', 'ASC');
                        },
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
                'label' => 'Technologies sur lesuqelles vous souhaitez travailler',
                ])

            ->add('Modifier', SubmitType::class, [
                "attr" => [
                    "class" => "btn btn-warning"
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
