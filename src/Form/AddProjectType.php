<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\Technology;
use App\Repository\TechnologyRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom du projet',
                'required' => true,
                ])

            ->add('summary', TextareaType::class, [
                'label' => 'Résumé',
                'required' => true,
                'help' => "Soyez impactants et directs.",
                'help_attr' => ['class' => 'fst-italic'],
                'attr' => ['rows' => '3']
                ])

            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => true,
                'help' => "Plus vous détaillez, plus vous augmenterez l'attractivité de votre projet.",
                'help_attr' => ['class' => 'fst-italic'],
                'attr' => ['rows' => '5']
                ])

            ->add('technologies', EntityType::class, [
                'class' => Technology::class,
                // Sort all technologies by name
                'query_builder' => function (TechnologyRepository $tr): QueryBuilder {
                    return $tr->createQueryBuilder('t')
                        ->orderBy('t.name', 'ASC');
                        },
                'choice_label' => 'name',
                'attr' => [
                    "class" => "d-flex flex-wrap",
                ],
                'multiple' => true,
                'required' => true,
                'label' => 'Technologies utilisées sur ce projet',
                ])

            ->add('image', ChoiceType::class, [
                'label' => 'Image de la technologie principale',
                'placeholder' => "Choisir une option",
                'required' => true,
                'choices' => [
                    'Environnement Javascript' => [
                        "Angular" => "images/technologies/angular.png",
                        "Javascript" => "images/technologies/javascript.png",
                        "Node.js" => "images/technologies/nodejs.png",
                        "React.js" => "images/technologies/react.png",
                    ],
                    'Environnement PHP' => [
                        "Laravel" => "images/technologies/laravel.png",
                        "Symfony" => "images/technologies/symfony.png",
                    ],
                    'Autres environnements' => [
                        "C#" => "images/technologies/csharp.png",
                        "Flutter" => "images/technologies/flutter.png",
                        "Java" => "images/technologies/java.png",
                        "Python" => "images/technologies/python.png",
                        "RubyOnRails" => "images/technologies/rubyonrails.png",
                        "Swift" => "images/technologies/swift.png",
                    ],
                    'Outils Cloud' => [
                        "Azure" => "images/technologies/azure.png",
                        "Google Cloud Plateform" => "images/technologies/gcp.png",
                    ],
                    'Autres outils' => [
                        "Docker" => "images/technologies/docker.png",
                        "Figma" => "images/technologies/figma.png",
                    ],  
                ]
                ])

            ->add('duration', ChoiceType::class, [
                'label' => 'Durée estimée du projet',
                'placeholder' => "Choisir une durée",
                'required' => true,
                'choices' => [
                    "Moins d'une semaine" => "Moins d'une semaine",
                    "Entre 1 semaine et 2 semaines" => "Entre 1 semaine et 2 semaines",
                    "Entre 2 semaines et 1 mois" => "Entre 2 semaines et 1 mois",
                    "Plus d'un mois" => "Plus d'un mois"
                ]
                ])

            ->add('status', ChoiceType::class, [
                'label' => 'Statut actuel',
                'placeholder' => "Choisir un statut",
                'required' => true,
                'choices' => [
                    "Idée" => "Idée",
                    "Équipe créée" => "Équipe créée",
                    "Développement commencé" => "Développement commencé"
                ]
                ])

            //->add('createdAt')
            ->add('study_level', ChoiceType::class, [
                'label' => "Niveau d'études souhaité des participants",
                'placeholder' => "Choisir un niveau",
                'required' => true,
                'choices' => [
                    "Tous niveaux" => "Tous niveaux",
                    "Bac + 2" => "Bac + 2",
                    "Bac + 3" => "Bac + 3",
                    "Bac + 5" => "Bac + 5"
                ]
                ])

            ->add('need_description', TextareaType::class, [
                'label' => 'Besoin du projet',
                'help' => "Détaillez ce que vous recherchez pour faire avancer pour votre projet.",
                'help_attr' => ['class' => 'fst-italic'],
                'required' => true,
                'attr' => ['rows' => '5']
                ])

            ->add('time_necessary_week', ChoiceType::class, [
                'label' => 'Estimation du temps à consacrer au projet par semaine (par participant)',
                'placeholder' => "Choisir une option",
                'required' => true,
                'choices' => [
                    "Moins de 5 heures" => "Moins de 5 heures",
                    "Entre 5 et 15 heures" => "Entre 5 et 15 heures",
                    "Entre 15 et 30 heures" => "Entre 15 et 30 heures",
                    "Plus de 30 heures" => "Plus de 30 heures"
                ]
                ])

            //->add('user')
            ->add('valider', SubmitType::class, ['attr' => ['class' => 'btn btn-success']])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }
}
