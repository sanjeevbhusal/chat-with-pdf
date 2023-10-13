import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const file = await prisma.file.create({
        data: {
            id: "dfkajlkfs",
            name: "Intro to web development",
            userId: "kp_c2a23fdad5be4d9ca398e3c2814ca74e",
            lastOpened: new Date()
        }
    })

    console.log(file)
}

main().catch(e => console.log(e))