# Проект: Formik-react

Проект создан для ознакомиления c библиотеками Formik, Yup.
Так как cоздание формы и ее валидация занимает много времени, на помощь приходят две библиотеки которые сокращают затрачиваемое время.

____
В проекте используется **HTML, CSS, JSX**.

___
## Стек
+ HTML
+ CSS
+ JSX


## Реализация
+ React
+ Декларативный подход


## Применяемые технологии с использованием библиотеки React
+ Разметка страницы создается в JSX.
+ Код разбит на функциональные компоненты.
+ Используются библиотеки Formix и Yup.

___
## Взаимодействие с библиотеками ##
1. Для установки библиотек:

  ```npm i formik```
  
  ```npm install yup --save```

2. Импортируем наши библиотеки в компонент

  ```import { useFormik } from "formik";```
  
  ```import * as Yup from 'yup'; ```

3. Пример: взаимодействия кода с Formik и преимущество Yup перед кастомной валидацией.
```
import React from 'react';
import { useFormik } from 'formik';

// кастомная валидация
const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

  // Передаём начальное значения формы (initialValues) в хук useFormik(), 
  // функцию проверки (validate), которая будет вызвана, когда значения формы изменяются, 
  // функцию отправки (onSubmit)

const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
   );
 };
 
```

В коде выше написана кастомная валидация, что бы каждый раз заного ее не писать, можно воспользоваться библиотекой Yup 

```
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    // Тееперь вместо кастомной валидации можно использовать Yup 
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
```
Туториал по Formik и Yup

https://formik.org/docs/tutorial

https://github.com/jquense/yup#numberminlimit-number--ref-message-string--function-schema

## Запуск проекта ##

1. Клонировать репозиторий

    ```git clone https://github.com/vladimirksh/formik-react.git```

2. Установить зависимости

    ```npm install```

3. Для запуска используйте команды:

    ```npm start```
  Запуск проекта в режиме разработки. Для просмотра результатов в браузере http://localhost:3000/ После внесения изменений страница перезагрузится автоматически.

    ```npm run build```
  Создает финальную сборку проекта, готовую для развертывания, в папке dist
