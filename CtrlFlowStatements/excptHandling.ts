class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Validation";
  }
}

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new ValidationError("Cannot divide by zero.");
  }

  return a / b;
}

const main = (): void => {
  console.log("Program started");

  try {
    const result = divide(20, 0);
    console.log("Result:", result);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("Validation Error:", error.message);
    } else if (error instanceof Error) {
      console.log("Unknown value thrown:", error);
    }
  } finally {
    console.log("Cleaning up resources...");
  }

  console.log("Program finished");
}

main();
