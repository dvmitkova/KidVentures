import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import '@testing-library/jest-dom/vitest'

afterEach(() => {
    cleanup(); //зачистваме дом дървото след всеки тест
});