import { Locator, Page } from "@playwright/test";

export class CartPage
{
    page:Page;
    samsungGalaxyS6:Locator;
    addToCartButton:Locator;
    cartItems: Locator;
    deleteButtons: Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.samsungGalaxyS6=page.locator("//a[normalize-space()='Samsung galaxy s6']");
        this.addToCartButton=page.locator("//a[@class='btn btn-success btn-lg']");
        this.cartItems = page.locator("//tbody[@id='tbodyid']/tr");
        this.deleteButtons = page.locator("//tbody[@id='tbodyid']/tr//a[normalize-space()='Delete']");
    }   

    async addToCart()
    {
        await this.samsungGalaxyS6.click();
        await this.addToCartButton.click();     
    }

    /* async getCartItemCount()
    {
        await this.page.waitForTimeout(3000);

        return await this.cartItems.count();
    }

      async deleteDuplicateItems()
    {
        // Give DemoBlaze time to load the cart
        await this.page.waitForTimeout(3000);

        while (true)
        {
            const currentCount = await this.cartItems.count();

            console.log("Current cart items:", currentCount);

            if (currentCount === 0)
            {
                break;
            }

            // Read current products
            const products: string[] = [];

            for (let i = 0; i < currentCount; i++)
            {
                const productName = (
                    await this.cartItems
                        .nth(i)
                        .locator("td")
                        .nth(1)
                        .innerText()
                ).trim();

                products.push(productName);
            }

            console.log("Current products:", products);

            // Start from the LAST row.
            // LAST row = latest added item.
            const latestProducts = new Set<string>();

            let indexToDelete = -1;

            for (let i = products.length - 1; i >= 0; i--)
            {
                const product = products[i];

                if (latestProducts.has(product))
                {
                    // This is an older duplicate
                    indexToDelete = i;
                    break;
                }

                // First time we see this product from the bottom
                // means this is the latest entry, so KEEP it.
                latestProducts.add(product);
            }

            // No duplicate found
            if (indexToDelete === -1)
            {
                console.log("No duplicate products found.");
                break;
            }

            console.log(
                "Deleting older duplicate:",
                products[indexToDelete],
                "at index:",
                indexToDelete
            );

            // Click Delete
            await this.cartItems
                .nth(indexToDelete)
                .locator("//a[normalize-space()='Delete']")
                .click();

            // IMPORTANT:
            // DemoBlaze rebuilds the cart after Delete.
            // Wait for it to finish rebuilding.
            await this.page.waitForTimeout(3000);
        }

        console.log(
            "Final number of items:",
            await this.cartItems.count()
        );
    } */

}