export function isValidAdmin(email, password) {
    const admins = [
      {
        email: process.env.ADMIN_EMAIL_01,
        password: process.env.ADMIN_PASS_01,
      },
      {
        email: process.env.ADMIN_EMAIL_02,
        password: process.env.ADMIN_PASS_02,
      },
    ];
  
    return admins.some(
      (admin) => admin.email === email && admin.password === password
    );
  }