import {prisma} from "./prisma-client";
import {hashSync} from "bcrypt";
import {categories, products} from "./constants";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "User",
                email: "user@test.by",
                password: hashSync("12345678", 10),
                verified: new Date(),
                role: "USER"
            },
            {
                fullName: "Admin",
                email: "admin@test.by",
                password: hashSync("qwerty", 10),
                verified: new Date(),
                role: "ADMIN"
            }
        ]
    })

    await prisma.category.createMany({
        data: categories
    });

    await prisma.product.createMany({
        data: products
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "1111"
            },
            {
                userId: 2,
                totalAmount: 0,
                token: "12341"
            },
        ]
    })

    await prisma.cartItem.create({
        data: {
            productId: 1,
            cartId: 1,
            quantity: 2
        }
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
