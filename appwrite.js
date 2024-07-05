// lib/appwrite.js

import { Client, Databases } from 'appwrite';

// Инициализация клиента Appwrite
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Укажите ваш конечный адрес Appwrite
  .setProject('66824e5b000c8b1cb704'); // Укажите ID вашего проекта

// Инициализация баз данных
const databases = new Databases(client);

// Идентификаторы коллекций
export const productsCollectionId = '668251990031afa44086'; // Идентификатор коллекции продуктов
export const categoriesCollectionId = '6682564c0006a1b3f280'; // Идентификатор коллекции категорий

export { client, databases };
