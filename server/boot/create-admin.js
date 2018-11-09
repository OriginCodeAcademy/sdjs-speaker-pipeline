module.exports = function(app) {
  const User = app.models.User;
  const Role = app.models.Role;
  const RoleMapping = app.models.RoleMapping;

  const email = process.env.ADMIN_EMAIL || 'test@test.com';
  const password = process.env.ADMIN_PASSWORD;
  const roleType = process.env.ADMIN_ROLETYPE || '1234';

  const adminObj = {
    email,
    password,
    roleType,
  };

  User.findOrCreate(
    {
      email,
      password,
      roleType,
    },
    adminObj,
    function(err, user) {
      if (err) return err.message;

      Role.find(
        {
          name: user.roleType,
        },
        function(err, role) {
          if (err) return err.message;

          RoleMapping.create(
            {
              principalType: role[0].name,
              principalId: user.id,
              roleId: role[0].id,
            },
            function(err, principal) {
              if (err) return err.message;
            }
          );
        }
      );
    }
  );
};
