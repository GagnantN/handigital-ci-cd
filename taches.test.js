import { test, expect } from 'vitest'
import { ajouterTache } from './taches.js'

test('ajoute une tâche à la liste', () => {
  const liste = ajouterTache([], 'Lire')
  expect(liste.length).toBe(1)
  expect(liste[0].titre).toBe('Lire')
})
