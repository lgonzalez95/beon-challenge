import { expect } from '@wdio/globals';
import { apiGet } from '../utils/api-util';
import { pathUrls } from '../constants/endpoints';
import homePage from '../pageobjects/home.page';

describe('@UI - UI Tests', () => {
    it('Sample UI Test', async () => {
        const searchCriteria = "cat";
        await homePage.open();
        await homePage.performSearch(searchCriteria);
        // Validations if time allowed
    });
});

describe('@API - API Pet Related Tests', () => {
    it('Get a Pet', async () => {
        const petId = 10;
        const response = await apiGet(pathUrls.apiPaths.getPet(petId));
        const responseBody = await response.json();
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(responseBody).toHaveProperty('id', petId);
        // If time allowed I would validate rest of the properties
        // I would use
        // expect(responseBody).toMatchObject({
        //     id: expect.any(Number()),
        //     ... Similar approach for other properties
        // }) // Validates response structure
    });
});