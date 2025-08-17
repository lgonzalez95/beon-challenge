export function validatePetApiCommonResponseStructure(responseBody, expectedId) {
    expect(responseBody).toMatchObject({
        id: expectedId ? expectedId : expect.any(Number),
        category: {
            id: expect.any(Number),
            name: expect.any(String),
        },
        name: expect.any(String),
        photoUrls: expect.arrayContaining([expect.any(String)]),
        tags: expect.arrayContaining([
            {
                id: expect.any(Number),
                name: expect.any(String),
            },
        ]),
        status: expect.stringMatching(/^(available|unavailable|sold)$/),
    });
}