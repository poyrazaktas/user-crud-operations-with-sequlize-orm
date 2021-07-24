const User = require("../models/users.js");
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      success: true,
      message: "Tüm kullanıcılar başarıyla getirildi.",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const addUser = async (req, res) => {
  try {
    await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Kullanıcı başarıyla eklendi.",
      data: req.body,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const getUser = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({
      success: false,
      message: "Böyle bir kullanıcı bulunamadı",
    });
  }
  User.findByPk(id)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Kullanıcı başarıyla getirildi.",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
        data: null,
      });
    });
};

const updateUser = (req, res) => {
  // Valida o pedido
  const id = req.params.id;
  if (!id) {
    res.status(400).json({
      success: false,
      message: "Böyle bir kullanıcı bulunamadı!",
    });
    return;
  }

  User.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        // 1 é o número de rows editadas
        res.status(200).json({
          success: true,
          message: "Kullanıcı başarıyla güncellendi.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const deleteUser = (req, res) => {
  // Valida o pedido
  const id = req.params.id;
  if (!id) {
    res.status(400).json({
      success: false,
      message: "Böyle bir kullanıcı bulunamadı!",
    });
    return;
  }

  User.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        // 1 é o número de rows editadas
        res.status(200).json({
          success: true,
          message: "Kullanıcı başarıyla kaldırıldı.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};
module.exports = { getUsers, addUser, getUser, updateUser, deleteUser };
