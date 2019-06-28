<?php

namespace App\Controller;

use Faker\Provider\Base;
use Faker\Provider\Color;
use Faker\Provider\DateTime;
use Faker\Provider\pl_PL\Payment;
use Faker\Provider\pl_PL\Text;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends Controller
{
    /**
     * @Route("/app", name="main")
     */
    public function index()
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/app/shopping-list-data", name="shopping_list_data")
     * @return JsonResponse
     */
    public function getShoppingList(): JsonResponse
    {
        $data = [];
        $count = random_int(1,10);
        for ($i=0; $i<$count; $i++) {
            $data[] = $this->createFakeProduct($i+1);
        }
        return new JsonResponse($data);
    }

    /**
     * @return array
     * @throws \Exception
     */
    private function createFakeProduct($id): array
    {
        $color = Color::safeColorName();
        return [
            'id' => $id,
            'name' => 'product-' . $color . '-' . random_int(1,10),
            'count' => \random_int(1,20),
            'description' => Base::shuffle('abcd efghijk lmnopq rstu vwxyz ')
        ];
    }
}
