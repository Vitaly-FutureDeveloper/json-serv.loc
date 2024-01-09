const str = {

    "сode": 200,
    
    "parameters": {
    
           actions: [ // array
    
                  "VIEW_PROJECT", // string, Просмотр проекта
    
                  "VIEW_MEMBERS_PROJECT", // string, Просмотр участников проекта
    
                  "VIEW_LINK_PROJECT", // string, Просмотр ссылки на проект 
    
                  "VIEW_SETTING_PROJECT", // string, Просмотр модального окна с настройками проекта + просмотр пункта в выпадающем списке "Настройки" 
    
                  "CREATE_FILE", // string, Отображение кнопки и создание файла
    
                  "DELETE_PROJECT_TEAM", // string, отображение кнопки и удаление проекта
    
                  "INVITE_MEMBER_PROJECT", // string, Приглашение участника в проект (по почте)
    
                  "REPEAT_INVITE_MEMBER_PROJECT" // string, Пригласить повторно (по почте)
    
                  ],
    
            projectId: 13, // идентификатор проекта
    
            projectName: "string", // название проекта
    
            projectDescription: "string", // описание проекта
    
            isFavorite: false, // проект отнесен в Избранное пользователя
    
            creatorId: 20, // идентификатор создателя проекта
    
            createAt: "string", // дата и время создания проекта
    
            updateAt: "string", // дата и время обновления проекта
    
             files:[{ // данные по файлам
    
                               "id": 20, // идентификатор файла
    
                               "avatarUrl": "string", // ссылка на аватар файла
    
                               "name": "string", // название файла
    
                              }]
    
            
    
           }
    
    }

    console.log(JSON.stringify(str))