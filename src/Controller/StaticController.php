<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StaticController
 * @package App\Controller
 */
class StaticController extends AbstractController
{
    /**
     * @Route("", name="static_index")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        return $this->render('static/index.html.twig');
    }

    /**
     * @Route("/about", name="static_about")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function about()
    {
        return $this->render('static/about.html.twig');
    }
}