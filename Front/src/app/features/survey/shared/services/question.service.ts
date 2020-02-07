import { Injectable } from '@angular/core';


@Injectable()
export class QuestionService {
// Capacité Sensorielle
  getQuestions1() {
    return {
      id: 1,
      values: [
        {
          key: '1',
          label: 'Réagit à une stimulation sonore (parole, musique, chant des oiseaux,...) ',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Réagit à une stimulation visuelle (télévision, personne entrant dans son champ visuel, luminosité,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '3',
          label: 'Réagit à une stimulation olfactive (parfums, odeurs de cuisine,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '4',
          label: 'Réagit à une stimulation gustative (amer, salé, sucré, chaud, froid, ...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Réagit à une stimulation tactile (tissus, objets, textures des objets,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Réagit aux stimulations corporelles globales (stimulations vibratoires, vestibulaires, balancements,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Présente une sensibilité spécifique aux contacts avec les zones érogènes (zone sexuelle, par exemple)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        }

      ]
    };
  }

// Capacité Attenttentionnelle
  getQuestions2() {
    return {
      id: 2,
      values: [
        {
          key: '1',
          label: 'Oriente volontairement son attention vers une personne',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Oriente volontairement son attention vers un animal',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '3',
          label:  'Oriente volontairement son attention vers un  objet qui l\'intéresse (photos, objets appréciés,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '4',
          label: 'Maintient  son attention de manière soutenue (durant le repas, quand elle  regarde la télévision, quand elle  écoute de la musique,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Fait deux choses à la fois (peut écouter de la musique et jouer,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Maintient son attention, même si une source de distraction intervient (continuer à écouter une histoire quand une personne bouge à côté  d\'\'elle)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Les compétences acquises le sont sur le long terme, hors épisodes de maladie',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
         }

      ]
    };
  }

// mémoire
  getQuestions3() {

    return {
      id: 3,
      values: [
        {
          key: '1',
          label: 'Reconnaît des personnes de son entourage familier en leur présence',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Reconnait les lieux familiers en les voyant  (chambre, établissement,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '3',
          label: 'Reconnait des situations, des objets familiers',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '4',
          label: 'Reconnait les sensations familières (musique, odeur, goût,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '5',
          label: 'Réagit à son prénom ou à son surnom',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '6',
          label: 'Connaît le prénom ou le nom des personnes de son entourage familier (les regarde quand elles sont nommées,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Se souvient d\'\'expériences heureuses ou malheureuses (associées à des lieux, des personnes, des situations,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '8',
          label: 'Reconnaît son image dans un miroir (regarde, sourit, touche l\'\'image et semble comprendre qu\'\'il s\'\'agit d\'\'elle,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '8',
          label: 'Reconnaît son image sur une photo ou parmi d\'\'autres photos',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '9',
          label: 'Reconnaît des éléments familiers, du quotidien sur une photo et/ou parmi d\'\'autres photos  (son chien, son chat, la voiture familiale, un lieu donné,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        }

      ]
    };
  }


    getQuestions4() {
// CapacitesCommunicatives
    return {
      id: 4,
      values: [
        {
          key: '1',
          label: 'Comprend le « oui » et/ou le « non »',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Comprend le « encore »',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '3',
          label: 'Utilise un signe, un son, un mot ... pour dire « oui »',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '4',
          label: 'Utilise un signe, un son, un mot ... pour dire « non »',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '5',
          label: 'Utilise un signe, un son, un mot ... pour dire « encore »',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '6',
          label: 'Connaît le prénom ou le nom des personnes de son entourage familier (les regarde quand elles sont nommées,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Se souvient d\'\'expériences heureuses ou malheureuses (associées à des lieux, des personnes, des situations,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '8',
          label: 'Comprend 2 ou 3 mots simples du quotidien dans leur contexte (quand on lui dit regarde la porte, elle comprend)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '9',
          label: 'Utilise un signe, un son, un mot ... pour désigner des éléments de la vie quotidienne (se frotte les yeux pour dire qu\'\'elle a sommeil, émet un son pour dire : j\'\'ai soif, ...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '10',
          label: 'Exprime des choix de manière claire et les maintient',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '11',
          label: 'Valide ou invalide de manière fiable une hypothèse émise sur son état émotionnel (quand on lui dit  « tu as l\'\'air contente ce matin », elle peut confirmer ou infirmer clairement, …)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '12',
          label: 'Exprime des choix de manière claire et les maintient',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '13',
          label: 'Exprime des choix de manière claire et les maintient',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '14',
          label: 'Valide ou invalide de manière fiable une hypothèse émise sur son état émotionnel (quand on lui dit  « tu as l\'\'air contente ce matin », elle peut confirmer ou infirmer clairement, …)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '15',
          label: 'Associe deux signes ou plus  (mots, gestes, images,...) (pied/ mal,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
             {
          key: '16',
          label: 'Valide ou invalide de manière fiable une hypothèse sur ce qu\'\'elle  souhaite, ce qu\'\'elle comprend (quand on lui dit : tu veux sortir, tu veux un yaourt, elle peut confirmer ou infirmer clairement …)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
            {
          key: '17',
          label: 'Utilise de manière habituelle une aide à la communication (image, tablette, signes,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
             {
          key: '18',
          label: 'Comprend des phrases simples du quotidien hors contexte (on va partir chez la tante en voiture alors qu\'\'elle est dans son lit,..)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        }
      ]
    };
    }

    // raisonnement
getQuestions5() {
    return {
      id: 5 ,
      values: [
        {
          key: '1',
          label: 'Utilise un objet intermédiaire pour atteindre un but ou solliciter une aide pour le faire (prendre un bâton pour approcher un objet convoité,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Comprend une relation de cause à effet (sait que lorsque l\'\'on appuie sur l\'\'interrupteur, la lumière s\'\'allume,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '3',
          label: 'Dans une situation donnée, un geste, une action lui permet d\'\'anticiper ce qui va suivre (sait que l\'\'on sort quand son manteau lui est présenté , se calme en arrivant dans la cuisine quand elle a faim,…)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '4',
          label: 'Comprend une relation de cause à effet (sait que lorsque l\'\'on appuie sur l\'\'interrupteur, la lumière s\'\'allume,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Recherche par l\'\'action ou le regard un objet que l\'\'on vient de cacher ou qui vient de disparaitre (un ballon qui roule et disparaît de sa vue,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Comprend une relation de cause à effet (sait que lorsque l\'\'on appuie sur l\'\'interrupteur, la lumière s\'\'allume,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Distingue les grandeurs (le grand bâton du petit bâton,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '8',
          label: 'Comprend une relation de cause à effet (sait que lorsque l\'\'on appuie sur l\'\'interrupteur, la lumière s\'\'allume,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '9',
          label: 'Fait preuve d\'humour ',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '10',
          label: 'Comprend quelqu\'\'un qui fait de l\'humour',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '11',
          label: 'Sait reconnaître si des éléments concrets sont de la même famille (catégorise)  (aliments, animaux, couleurs,...) ',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
          {
          key: '12',
          label: 'Repère la présence d\'\'un élément inhabituel dans une situation familière (voit qu\'\'un objet n\'\'est pas à sa place, qu\'\'une personne n\'\'est pas présente comme prévu,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
          {
          key: '13',
          label: 'Sait reconnaître si des éléments concrets sont de la même famille (catégorise)  (aliments, animaux, couleurs,...) ',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '14',
          label: 'Distingue les quantités (manifeste une préférence pour avoir un paquet qui contient la plus grande quantité de choses qu\'\'elle aime (chocolat ou friandise,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        }

      ]
    };
  }

    // Capacites Spatiales Et Temporelles
    getQuestions6() {
    return {
      id: 6 ,
      values: [
        {
          key: '1',
          label: 'Se déplace seule  ou avec aide dans son espace de vie pour le plaisir du déplacement sans autre intentionnalité repérée',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Se déplace seule ou avec aide pour atteindre un lieu où elle a choisi d\'\'aller dans son espace de vie',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '3',
          label: 'Dans une situation donnée, un geste, une action lui permet d\'\'anticiper ce qui va suivre (sait que l\'\'on sort quand son manteau lui est présenté , se calme en arrivant dans la cuisine quand elle a faim,…)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '4',
          label: 'Sait orienter une personne (lui indiquer la direction des toilettes,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Distingue le vide et le plein (remplit et vide elle-même ou suit du regard celui qui le fait ou incite l\'\'autre à le faire par des mots, des sons, des gestes, des mimiques,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Est capable de ranger ses affaires ou d\'\'indiquer où elles se rangent (vêtements, objets,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Se repère dans le temps à l\'\'échelle d\'\'une journée (anticipe le  moment du repas, du coucher...) ',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '8',
          label: 'Comprend une relation de cause à effet (sait que lorsque l\'\'on appuie sur l\'\'interrupteur, la lumière s\'\'allume,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '9',
          label: 'Sait guider une personne pour se faire conduire vers l\'\'endroit où elle veut aller',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '10',
          label: 'Différencie le dessus du dessous (oriente son regard sur/sous la table quand on lui dit que le ballon est sur/sous la table,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '11',
          label: 'Distingue les quantités (manifeste une préférence pour avoir un paquet qui contient la plus grande quantité de choses qu\'\'elle aime (chocolat ou friandise,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
          {
          key: '12',
          label: 'Se repère dans les lieux qui lui sont familiers (sa rue, sa maison,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
          }

      ]
    };
  }



      //  capacites D apprentissage

       getQuestions7() {
    return {
      id: 7 ,
      values: [
        {
          key: '1',
          label: 'Reproduit de manière adaptée un geste, une mimique, une action, en présence d\'\'un modèle (essuie la table quand elle voit une personne le faire,..)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Reproduit de manière adaptée un geste, une mimique, une action, hors de la présence du modèle (peut empiler des objets, vider, remplir sans que quelqu\'\'un le fasse en même temps,…)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '3',
          label: 'Reproduire une trace sur une feuille',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '4',
          label: 'Utilise des applications informatiques simples pour jouer, pour produire un effet (tablettes, smartphone,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Se montre performante dans les apprentissages mettant en jeu la motricité globale (déplacement, retournement,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Se montre performante dans les apprentissages mettant en jeu la motricité fine (graphisme, puzzle, prendre des miettes de pain sur la table,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Se montre performante dans les apprentissages mettant en jeu les différents sens (toucher, odorat, audition,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '8',
          label: 'Est active dans les situations d\'\'apprentissage, peut faire preuve d\'\'initiative',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '9',
          label: 'Fait semblant (fait semblant de manger,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '10',
          label: 'Fait preuve de créativité (à partir de l\'\'apprentissage d\'\'un geste invente une autre utilisation de ce geste,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '11',
          label: 'Prend plaisir et intérêt à laisser une trace sur une feuille, à dessiner (gribouillis,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
          {
          key: '12',
          label: 'Réalise des graphismes élaborés (dessins symboliques,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
       }

      ]
    };
  }
      // competences Socio Emotionnelle

    getQuestions8() {
    return {
      id: 8 ,
      values: [
        {
          key: '1',
          label: 'Parvient à maîtriser ses émotions et son excitation',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Participe à un jeu dans lequel chacun intervient l\'\'un après l\'\'autre. Attend son tour et intervient ensuite (jeux vocaux, gestuels,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '3',
          label: 'Se montre capable de s\'adapter aux émotions qu\'\'elle perçoit chez les autres (rit à une plaisanterie,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '4',
          label: 'Se montre capable de s\'adapter à un changement de ton dans la voix (fait la tête quand quelque chose lui est reproché,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Se montre capable de s\'adapter à un changement d\'\'expression faciale chez autrui (cesse de rire quand son interlocuteur signifie, par son expression, que ce n\'\'est pas drôle,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Quand c\'\'est nécessaire, se montre capable d\'\'adapter  ses comportements selon qu\'\'elle interagit  avec un parent, un professionnel, des amis(en matière de toucher, de regard,  de modalité d\'\'expression,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Se montre capable d\'adapter  ses comportements selon le contexte dans lequel elle se trouve (famille, rue, lieu de vie, lieu d\'éducation, de loisirs,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '8',
          label: 'Ajuste de manière adaptée ses comportements en fonction des objectifs  visés (obtenir ou refuser quelque chose, fuir quelqu\'\'un ou quelque chose,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '9',
          label: 'Exprime ses émotions de manière compréhensible pour ses proches',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '10',
          label: 'Prête attention à une activité en même temps qu\'\'une autre personne (écouter une histoire, regarder ensemble un livre,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '11',
          label: 'Prend plaisir et intérêt à laisser une trace sur une feuille, à dessiner (gribouillis,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
          {
          key: '12',
          label: 'Manifeste le souhait que l\'on respecte son intimité / est pudique',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '13',
          label: 'Manifeste des préférences amicales',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '14',
          label: 'Développe des amitiés réciproques (choisit des partenaires / ami(e)s qui la choisissent également)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '15',
          label: 'Manifeste des comportements  de séduction',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '16',
          label: 'Manifeste de l\'\'intérêt et du plaisir à son apparence physique (peut montrer qu\'elle  préfère tel ou tel vêtement,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '17',
          label: 'Est sensible à la manière dont les autres jugent son apparence (montre qu\'\'elle est contente quand on lui dit que son habit lui va bien,...)',
          required: false,
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
           }

      ]
    };
  }

      // manifestation Oropharyngees

getQuestions9() {
    return {
      id: 9 ,
      values: [
        {
          key: '1',
          label: 'Emissions sonores, cris, vocalises, toux, gémissements...',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Prononce de manière distincte des voyelles, des syllabes',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '3',
          label: 'Prononce des mots',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '4',
          label: 'Peut reproduire un son, chantonner...',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Arythmies de la respiration (blocages du souffle ou hyperventilations...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Bavages, salivations',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Vomissements, régurgitations',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
          }

      ]
    };
  }

      // Autres ( > 18 ans)
      getQuestions10() {
    return {
      id: 9 ,
      values: [
        {
          key: '1',
          label: 'Présente un comportement séducteur avec une intention manifestement sexualisée (par les gestes, par le regard, par les attitudes,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
        {
          key: '2',
          label: 'Recherche activement la stimulation de ses zones érogènes (auto-érotisme, hétéro-érotisme) ',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '3',
          label: 'Réagit de manière sensuelle aux contacts sur ses zones érogènes',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '4',
          label: 'Met en œuvre des stratégies adaptées à ses préférences amoureuses (ne veut pas partir en week-end si son amoureux (se) ne vient pas avec elle,...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '5',
          label: 'Arythmies de la respiration (blocages du souffle ou hyperventilations...)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '6',
          label: 'Manifeste des préférences amoureuses',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
        },
         {
          key: '7',
          label: 'Développe des relations amoureuses réciproques (choisit des partenaires/petit(e)s ami(e)s qui la choisissent également)',
          options: [
            { key: 1, value: 1 },
            { key: 2, value: 2 },
            { key: 3, value: 3 },
            { key: 4, value: 4 },
            { key: 5, value: 'impossible' },
            { key: 6, value: 'ne se prononce pas' }
          ]
          }

      ]
    };
  }

}
