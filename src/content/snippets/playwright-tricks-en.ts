export const snippetStep = [
  "test('happy path checkout', async ({ page }) => {",
  "  await test.step('Login', async () => {",
  "    await page.goto('/login');",
  "    await page.getByLabel('Email').fill('user@test.com');",
  "    await page.getByText('Sign in').click();",
  '  });',
  "  await test.step('Cart and pay', async () => {",
  "    await page.goto('/cart');",
  "    await page.getByText('Pay').click();",
  '  });',
  '});',
].join('\n');

export const snippetRoute = [
  "await page.route('**/api/profile', async (route) => {",
  '  await route.fulfill({',
  '    status: 200,',
  "    contentType: 'application/json',",
  "    body: JSON.stringify({ name: 'QA User', plan: 'pro' }),",
  '  });',
  '});',
].join('\n');

export const snippetToPass = [
  'await expect(async () => {',
  "  await expect(page.getByText('Saved')).toBeVisible();",
  '}).toPass({ timeout: 10_000 });',
].join('\n');
