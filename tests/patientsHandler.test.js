import patientsHandler from "../site/js/patentsHandler";

describe("Given patientsHandler", () => {
  describe("When inputed 4 people of which 2 are men with diabetis", () => {
    test("Then it should return 2 diabetic men", () => {
      const inputPatients = [
        {
          patient: {
            name: "Marta",
            age: 56,
            sexo: "W",
          },
          daysInHospital: 5,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Esteban",
            age: 40,
            sexo: "M",
          },
          daysInHospital: 3,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Esteban",
            age: 40,
            sexo: "M",
          },
          daysInHospital: 3,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Paco",
            age: 40,
            sexo: "M",
          },
          daysInHospital: 3,
          diet: "Low fiber",
        },
      ];
      const expectedDiabetisMan = 2;

      const result = patientsHandler(inputPatients);

      expect(result.nDiabeticMen).toBe(expectedDiabetisMan);
    });
  });
  describe("When inputed 4 people of which 2 are 20yo women", () => {
    test("Then it should return 20 as women average age", () => {
      const inputPatients = [
        {
          patient: {
            name: "Marta",
            age: 20,
            sexo: "W",
          },
          daysInHospital: 5,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Esteban",
            age: 40,
            sexo: "M",
          },
          daysInHospital: 3,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Esteban",
            age: 40,
            sexo: "M",
          },
          daysInHospital: 3,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Paca",
            age: 20,
            sexo: "W",
          },
          daysInHospital: 3,
          diet: "Low fiber",
        },
      ];
      const expectedWomenAverageAge = 20;

      const result = patientsHandler(inputPatients);

      expect(result.averageAgeWomen).toBe(expectedWomenAverageAge);
    });
  });
});
