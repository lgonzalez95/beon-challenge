import { expect } from '@wdio/globals';
import { apiDelete, apiGet, apiPost, apiPut } from '../utils/api-util';
import { pathUrls } from '../constants/endpoints';
import homePage from '../pageobjects/home.page';
import searchResultsPage from '../pageobjects/search-results.page';
import updatePetData from '../test-data/pet-update.json';
import createPetData from '../test-data/pet-create.json';
import { faker } from '@faker-js/faker';
import { validatePetApiCommonResponseStructure } from '../utils/validation-utils';


describe('@UI - UI Tests', () => {
    it('Google Seach Functionality Works as expected', async () => {
        const searchCriteria = "cat";
        await homePage.open();
        await homePage.performSearch(searchCriteria);
        // await browser.pause(15000); // Enable this in case reCaptcha is triggered and resolve it by yourself
        await expect(searchResultsPage.searchResultsParent).toBeDisplayed();
        await expect(searchResultsPage.searchResultsLinks).toBeElementsArrayOfSize({ gte: 1 });
    });

    it('Google Seach Results Navigate as Expected', async () => {
        const searchCriteria = "cat";
        const previousTitle = await browser.getTitle();
        await homePage.open();
        await homePage.performSearch(searchCriteria);
        // await browser.pause(15000); // Enable this in case reCaptcha is triggered and resolve it by yourself
        await searchResultsPage.navigateToRandomResult();
        await expect(browser.getTitle()).not.toBe(previousTitle);
    });
});

describe('@API - API Pet Related Tests', () => {
    it('Get a Pet', async () => {
        const petId = 10;
        const response = await apiGet(pathUrls.apiPaths.getPet(petId));
        expect(response.headers.get('content-type')).toMatch(/application\/json/i);
        const responseBody = await response.json();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        validatePetApiCommonResponseStructure(responseBody, petId);
    });

    it('Update a Pet', async () => {
        const newPetName = faker.person.firstName();
        updatePetData.name = newPetName;
        const response = await apiPut(pathUrls.apiPaths.updatePet(), updatePetData);
        expect(response.headers.get('content-type')).toMatch(/application\/json/i);
        const responseBody = await response.json();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(responseBody).toHaveProperty('name', newPetName);
        validatePetApiCommonResponseStructure(responseBody);
    });

    it('Create a Pet', async () => {
        const petId = faker.number.int({ min: 1000, max: 99999 });
        createPetData.id = petId;
        const response = await apiPost(pathUrls.apiPaths.createPet(), createPetData);
        expect(response.headers.get('content-type')).toMatch(/application\/json/i);
        const responseBody = await response.json();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(responseBody).toHaveProperty('id', petId);
        validatePetApiCommonResponseStructure(responseBody);
    });

    it('Delete a Pet', async () => {
        const petId = 1;
        const response = await apiDelete(pathUrls.apiPaths.deletePet(petId));
        expect(response.headers.get('content-type')).toMatch(/application\/json/i);
        const responseBody = await response.text();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(responseBody).toBe('Pet deleted');
    });
});