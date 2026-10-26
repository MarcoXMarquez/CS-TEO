// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Suite de Pruebas E2E: SauceDemo E-Commerce
 * Conforme a Norma ISO/IEC/IEEE 29119 (Partes 2, 3, 4 y 5)
 * Grupo 02 - Calidad de Software UNSA 2026
 */

const BASE_URL = 'https://www.saucedemo.com';

test.describe('SauceDemo E-Commerce - Especificación ISO 29119', () => {

  // ============================================================================
  // REQUISITO R1: CONTROL DE ACCESO Y AUTENTICACIÓN
  // ============================================================================

  test('T01 [R1] - Autenticación exitosa con credenciales válidas estándar', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/.*inventory.html/);
    const title = page.locator('[data-test="title"]');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Products');
  });

  test('T02 [R1] - Bloqueo de acceso para usuario suspendido/locked_out', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });

  // ============================================================================
  // REQUISITO R2: NAVEGACIÓN E INSPECCIÓN DE CATÁLOGO
  // ============================================================================

  test('T03 [R2] - Verificación de integridad estructural del catálogo (6 productos)', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const items = page.locator('[data-test="inventory-item"]');
    await expect(items).toHaveCount(6);

    for (let i = 0; i < 6; i++) {
      const item = items.nth(i);
      await expect(item.locator('[data-test="inventory-item-name"]')).toBeVisible();
      await expect(item.locator('[data-test="inventory-item-price"]')).toBeVisible();
      const priceText = await item.locator('[data-test="inventory-item-price"]').textContent();
      const price = parseFloat(priceText?.replace('$', '') || '0');
      expect(price).toBeGreaterThan(0);
    }
  });

  test('T04 [R2] - Navegación a la ficha de detalle de producto y retorno sin pérdida de estado', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="item-4-title-link"]').click();
    await expect(page).toHaveURL(/.*inventory-item.html\?id=4/);

    const detailName = page.locator('[data-test="inventory-item-name"]');
    await expect(detailName).toHaveText('Sauce Labs Backpack');
    const detailPrice = page.locator('[data-test="inventory-item-price"]');
    await expect(detailPrice).toHaveText('$29.99');

    await page.locator('[data-test="back-to-products"]').click();
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  // ============================================================================
  // REQUISITO R3: ORDENAMIENTO Y CLASIFICACIÓN DE PRODUCTOS
  // ============================================================================

  test('T05 [R3] - Clasificación por precio ascendente satisface P[i] <= P[i+1]', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    const priceLocators = page.locator('[data-test="inventory-item-price"]');
    const count = await priceLocators.count();
    const prices = [];
    for (let i = 0; i < count; i++) {
      const text = await priceLocators.nth(i).textContent();
      prices.push(parseFloat(text?.replace('$', '') || '0'));
    }

    expect(prices.length).toBe(6);
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
    }
  });

  test('T06 [R3] - Clasificación por precio descendente satisface P[i] >= P[i+1]', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');

    const priceLocators = page.locator('[data-test="inventory-item-price"]');
    const count = await priceLocators.count();
    const prices = [];
    for (let i = 0; i < count; i++) {
      const text = await priceLocators.nth(i).textContent();
      prices.push(parseFloat(text?.replace('$', '') || '0'));
    }

    expect(prices.length).toBe(6);
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
  });

  // ============================================================================
  // REQUISITO R4: GESTIÓN REACTIVA DEL CARRITO DE COMPRAS
  // ============================================================================

  test('T07 [R4] - Adición individual de ítem actualiza badge de carrito a 1 y conmuta botón', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const addBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    await addBtn.click();

    const badge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveText('1');

    const removeBtn = page.locator('[data-test="remove-sauce-labs-backpack"]');
    await expect(removeBtn).toBeVisible();
  });

  test('T08 [R4] - Gestión compuesta: agregar múltiples ítems y supresión parcial reactiva', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    const badge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(badge).toHaveText('2');

    // Remover uno
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(badge).toHaveText('1');
  });

  // ============================================================================
  // REQUISITO R5: FLUJO DE CHECKOUT Y VALIDACIÓN FORMULARIA
  // ============================================================================

  test('T09 [R5] - Validación obligatoria de campos vacíos en Checkout Step One', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL(/.*checkout-step-one.html/);
    await page.locator('[data-test="continue"]').click();

    const errorBanner = page.locator('[data-test="error"]');
    await expect(errorBanner).toBeVisible();
    await expect(errorBanner).toContainText('Error: First Name is required');
  });

  test('T10 [R5] - Despacho formal de datos válidos habilita transición a Checkout Step Two', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Yoel');
    await page.locator('[data-test="lastName"]').fill('Condori');
    await page.locator('[data-test="postalCode"]').fill('04001');
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    const stepTwoTitle = page.locator('[data-test="title"]');
    await expect(stepTwoTitle).toHaveText('Checkout: Overview');
  });

  // ============================================================================
  // REQUISITO R6: CONSISTENCIA ARITMÉTICA Y CIERRE DE SESIÓN
  // ============================================================================

  test('T11 [R6] - Consistencia aritmética en subtotal, impuesto (8%) y total neto', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // $29.99
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); // $9.99
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Marco');
    await page.locator('[data-test="lastName"]').fill('Marquez');
    await page.locator('[data-test="postalCode"]').fill('04001');
    await page.locator('[data-test="continue"]').click();

    const subtotalText = await page.locator('[data-test="subtotal-label"]').textContent();
    const taxText = await page.locator('[data-test="tax-label"]').textContent();
    const totalText = await page.locator('[data-test="total-label"]').textContent();

    const subtotal = parseFloat(subtotalText?.replace('Item total: $', '') || '0');
    const tax = parseFloat(taxText?.replace('Tax: $', '') || '0');
    const total = parseFloat(totalText?.replace('Total: $', '') || '0');

    expect(subtotal).toBeCloseTo(39.98, 2);
    expect(tax).toBeCloseTo(3.20, 2);
    expect(total).toBeCloseTo(subtotal + tax, 2);
  });

  test('T12 [R6] - Finalización satisfactoria de orden y cierre de sesión seguro', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Rafael');
    await page.locator('[data-test="lastName"]').fill('Nina');
    await page.locator('[data-test="postalCode"]').fill('04001');
    await page.locator('[data-test="continue"]').click();

    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(/.*checkout-complete.html/);

    const completeHeader = page.locator('[data-test="complete-header"]');
    await expect(completeHeader).toHaveText('Thank you for your order!');

    // Logout
    await page.locator('#react-burger-menu-btn').click();
    const logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    await expect(logoutLink).toBeVisible();
    await logoutLink.click();

    await expect(page).toHaveURL(new RegExp(`${BASE_URL}/?$`));
    const loginBtn = page.locator('[data-test="login-button"]');
    await expect(loginBtn).toBeVisible();
  });

});
