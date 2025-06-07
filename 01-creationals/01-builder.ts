/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
    public CPU: string = 'CPU - NOT DEFINED';
    public RAM: string = 'RAM - NOT DEFINED';
    public storage: string = 'Storage - NOT DEFINED';
    public GPU?: string;

    displayConfiguration(): void {
        console.log(`Configuration:
        CPU: ${this.CPU}
        RAM: ${this.RAM}
        Storage: ${this.storage}
        GPU: ${this.GPU ?? 'Not included'}`);
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.CPU = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.RAM = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.GPU = gpu;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

function main() {
    const gamingComputer = new ComputerBuilder()
        .setCPU('AMD Ryzen 9 5900X')
        .setRAM('32GB DDR4')
        .setStorage('1TB NVMe SSD')
        .setGPU('NVIDIA GeForce RTX 3080')
        .build();

    gamingComputer.displayConfiguration();

    const officeComputer = new ComputerBuilder()
        .setCPU('Intel Core i5-10400')
        .setRAM('16GB DDR4')
        .setStorage('512GB SSD')
        .build();

    officeComputer.displayConfiguration();
}

main();