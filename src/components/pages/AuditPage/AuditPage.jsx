import React from 'react';
import BackButton from "../../sharedComponents/BackButton/BackButton";
import s from './AuditPage.module.scss'
import img from '../../../assets/audit/img.png'
import Button from "../../sharedComponents/Button/Button";

const AuditPage = () => {
  return (
      <div className='container'>
        <BackButton classname={s.backBtn}/>
        <h1 className={s.title}>Аудит и аудиторские услуги</h1>

        <div className={s.wrapper}>
          <div className={s.content}>
            <p className={s.par}>Аудит информационной инфраструктуры компании с целью выявления потенциально опасных
              участков
              инфраструктуры которые могут привести к возможной утечке информационных данных компании. Кроме этого
              анализируется не только архитектура информационной инфраструктуры компании, а принципы и способы работы
              сотрудников компании в этой инфраструктуре, способы передачи служебных данных между участниками деловых
              процессов, состав служебных данных.</p>

            <h2 className={s.subtitle}>Результатом проведения аудита является: </h2>

            <ul className={s.list}>
              <li className={s.listItem}>
                Отчёт содержащий основные данные по проведённому аудиту, а именно аналитику по информационной
                инфраструктуре компании;
                Потенциально опасные участки сети (в случае их обнаружения),
              </li>

              <li className={s.listItem}>
                Индивидуальные рекомендации по предупреждению рисков возникновения утечки информационных данных компании,
                защите внутренней локальной сети компании,
              </li>
              <li className={s.listItem}>
                Методики и способы передачи служебных данных компании понижающие риски их компрометации третьими лицами.
              </li>         
            </ul>
            
            <div className={s.orderBtn}>
            <Button text={'Заказать'} />
            </div>
          </div>
          <img className={s.img} src={img} alt="audit"/>
        </div>
      </div>
  );
};

export default AuditPage;