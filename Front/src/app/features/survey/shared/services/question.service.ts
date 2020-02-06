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
          label: 'Q1',
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
          label: 'Q2',
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
          label: 'Q3',
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
          label: 'Q4',
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

//Capacité Attenttentionnelle
  getQuestions2() {
    return {
      id: 2,
      values: [
        {
          key: '1',
          label: 'yyyyyy',
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
          label: 'Q2',
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
          label: 'hhui',
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
          label: 'Q4',
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
    return {
      id: 4,
      values: [
        {
          key: '1',
          label: 'Q1',
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
          label: 'Q2',
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
          label: 'Q3',
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
          label: 'Q4',
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