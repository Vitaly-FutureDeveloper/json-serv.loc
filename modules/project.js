const project = () => {
  const files = [];

  for (let i = 0; i < 100; i++) {
    files.push({
      id: 20000 * (i + 1),
      avatarUrl: "http://localhost:8081/src/assets/images/Demo.png",
      name: `Проект ${i}`,
      updateAt: ""
    })
  }

  return {
    сode: 200,
    parameters: {
      actions: [
          "VIEW_PROJECT",  //экшен предназначен для отображения всей страницы проекта,
          "VIEW_MEMBERS_PROJECT",  //экшен предназначен для отображения кнопки "Поделиться" на странице проекта, а также модального окна с участниками проекта,
          "VIEW_LINK_PROJECT",  // экшен предназначен для отображения кнопки "Скопировать ссылку" в меню проекта,
          "VIEW_SETTING_PROJECT",  // экшен предназначен для отображения кнопки "Настройки" в меню проекта, а также модального окна с названием и описание проекта,
          "CREATE_FILE_PROJECT",  // экшен предназначен для отображения кнопки "Создать файл" на странице проекта
          "DELETE_PROJECT_TEAM",  // экшен предназначен для отображения кнопки "Удалить проект" в меню проекта
          "INVITE_MEMBER_PROJECT",  // предназначен для отображения кнопки "Пригласить" в модальном окне "Поделиться"
          "REPEAT_INVITE_MEMBER_PROJECT" // предназначен для отображения кнопки "Пригласить повторно" в выпадающем меню участника, которому было отправлено приглашение, но участник его не принял.
      ],
      project: {
        projectId: 13,
        name: "Spectr(Demo)",
        teamName: "Team myself",
        projectDescription: "string",
        isFavorite: false,
        creatorId: 20,
        createAt: "string",
        updateAt: "string",
        files: files
      },
    }
  };
}

// Пользовательский обработчик маршрута для обновления поля 'isFavorite'
const projectActionPatch = (req, res) => {
  const { isFavorite } = req.body;
  
  if (isFavorite !== undefined) {
    // Получаем существующий объект project
    const project = global.router.db.get('project').value();

    // Обновляем поле 'isFavorite' новым значением
    project.parameters.project.isFavorite = !project.parameters.project.isFavorite;

    // Обновляем объект project в базе данных
    global.router.db.get('project').assign(project).write();

    res.status(200).json(project.parameters.project.isFavorite);
  } else {
    res.status(400).json({ error: 'Некорректный запрос' });
  }
}

module.exports = {
  project,
  projectActionPatch
};