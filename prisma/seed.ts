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

    const candles1 = await prisma.product.create({
        data: {
            name: "Свеча 1",
            imageUrl: "https://sun9-27.userapi.com/impg/5tA2qS-QDLm4S3vEFhdz4p2B1sJZFKkV5W2x9Q/393J5pjEIv8.jpg?size=1000x1021&quality=95&sign=1a666539f54a9b8015c6d10dc3bbad9c&type=album",
            categoryId: 1
        }
    });

    const candles2 = await prisma.product.create({
        data: {
            name: "Свеча 2",
            imageUrl: "https://sun9-80.userapi.com/impg/ymLcM9H7ww3cAC4cgOlkt3Y8zdE_o4hYHj__nA/GhHlJ3kIKow.jpg?size=962x991&quality=95&sign=d555de9c8e653e7321d23ad9dcaace96&type=album",
            categoryId: 1
        }
    });

    const candles3 = await prisma.product.create({
        data: {
            name: "Свеча 3",
            imageUrl: "https://sun9-10.userapi.com/impg/CsQ_EPTfp79RhoAHhSNg0SgG4CD3NCwwguxnmQ/KIfOeeSGFfs.jpg?size=1024x1024&quality=95&sign=194a392c4a9e661e3e6576d89914ce4a&type=album",
            categoryId: 1
        }
    });

    await prisma.productItem.createMany({
        data: [
            {
                productId: candles1.id,
                price: 300
            },
            {
                productId: candles2.id,
                price: 431
            },
            {
                productId: candles3.id,
                price: 353
            }
        ]
    })

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
            productItemId: 1,
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
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
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
