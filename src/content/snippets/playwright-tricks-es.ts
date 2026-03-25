export const snippetStep = [
  "test('checkout feliz', async ({ page }) => {",
  "  await test.step('Login', async () => {",
  "    await page.goto('/login');",
  "    await page.getByLabel('Email').fill('user@test.com');",
  "    await page.getByText('Entrar').click();",
  '  });',
  "  await test.step('Carrito y pago', async () => {",
  "    await page.goto('/cart');",
  "    await page.getByText('Pagar').click();",
  '  });',
  '});',
].join('\n');

export const snippetRoute = [
  "await page.route('**/api/profile', async (route) => {",
  '  await route.fulfill({',
  '    status: 200,',
  "    contentType: 'application/json',",
  "    body: JSON.stringify({ name: 'Usuario QA', plan: 'pro' }),",
  '  });',
  '});',
].join('\n');

export const snippetToPass = [
  'await expect(async () => {',
  "  await expect(page.getByText('Guardado')).toBeVisible();",
  '}).toPass({ timeout: 10_000 });',
].join('\n');
