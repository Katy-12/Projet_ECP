import { Injectable } from '@angular/core';


@Injectable()
export class QuestionServiceReac {
getQuestions1() {
    return {
      id: 1,
      values: [
        {
          key: '1',
          label: 'Emissions sonores, cris, vocalises, toux, gémissements... ',
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
    }
  }

//MobilitesFaciales
  getQuestions2() {
    return {
      id: 2,
      values: [
        {
          key: '1',
          label: 'Tics, rictus, grincements de dents...',
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
          label: 'Modifications du teint, sudations (pâleur, rougeur,...)',
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
          label:  "Mimiques du visage",
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
          label: 'Poursuite oculaire',
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
    }
  }

// mobilites Corporelle Volontaire
  getQuestions3() {
    return {
      id: 3,
      values: [
        {
          key: '1',
          label: 'Mouvements de la tête',
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
          label: "Mouvements d''un membre du corps  (bras, jambes,...)",
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
          label: "Perte ou affaiblissement du tonus musculaire (la personne s'affaisse...)",
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
          label: 'Arrêt de tout mouvement',
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
          label: 'Action motrice sur un objet avec ou sans aide (prendre ou jeter,...)',
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
          label: "Arrêt ou reprise d''une activité d''autostimulation (bruitages avec les mains/la bouche,...)",
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
    }
  }

  
    getQuestions4() {
//Etat emotionnel et Affectif
    return {
      id: 4,
      values: [
        {
          key: '1',
          label: 'Est joyeuse, gaie, montre facilement du plaisir, est souriante',
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
          label: 'Est sereine/tranquille/paisible',
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
          label: 'Est sociable (aime être entourée de gens)',
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
          label: 'Est solitaire (aime être seule)',
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
          label: 'Est angoissée',
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
          label: 'Est fatigable',
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
          label: 'Est triste',
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
          label: 'Est peureuse/facilement inquiète ou anxieuse',
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
          label: 'Se met facilement en colère',
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
          label: 'Est contente de rencontrer de nouvelles personnes',
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
          label: 'Est curieuse, aime découvrir des activités nouvelles',
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
          label: "S''adapte facilement à de nouvelles personnes",
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
          label: 'Est contente des changements de lieux',
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
          label: "S''adapte facilement à des changements de lieux",
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
          label: "Peut activement s''opposer et montre son désaccord de manière claire",
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
          label:"Présente des troubles du sommeil (dort beaucoup, très peu, se réveille souvent,...)",
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
          label: 'Présente des troubles du comportement alimentaire (refus de la nourriture, mange tout sans limite,...)',
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
          label: 'Est facilement agressive envers les autres',
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
        key: '19',
          label: "Présente des comportements auto-agressifs (se mord, se tape la tête,...)",
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
        key: '20',
          label: '...par des pleurs et/ou une agitation',
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
        key: '21',
          label: '...en se mettant en retrait ou en se repliant sur elle-même',
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
        key: '22',
          label: "...le contact se fait par l'audition (musique, voix, histoires,...)",
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
        key: '23',
          label: '...le contact se fait par le toucher (câlins, caresses, massages,...)',
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
        key: '24',
          label: '...le contact se fait par le mouvement (bercement, balancement,...)',
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
        key: '25',
          label: '...la vue est en jeu (regarder la télévision, un livre, des films, des images,...',
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
        key: '26',
          label: 'Apprécie la musique',
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
        key: '27',
          label: 'Apprécie manger',
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
    }
    }

}
