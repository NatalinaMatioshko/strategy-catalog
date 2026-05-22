import type { StrategyDocument } from "../types/strategy";

export const strategiesMock: StrategyDocument[] = [
  {
    id: "lviv-2030",
    title: "Стратегія розвитку Львівської громади до 2030 року",
    community: "Львівська громада",
    region: "Львівська область",
    period: "2021–2030",
    status: "active",
    adoptedAt: "2021-12-20",
    sourceUrl: "https://example.com/lviv-2030",
    summary:
      "Довгостроковий документ розвитку громади з фокусом на економіку, інфраструктуру та якість життя.",
    strategicGoals: [
      {
        id: "sg-1",
        title: "Сталий економічний розвиток",
        description: "Підтримка бізнесу, інвестицій і зайнятості.",
      },
      {
        id: "sg-2",
        title: "Комфортне міське середовище",
        description:
          "Розвиток транспорту, житлової та соціальної інфраструктури.",
      },
    ],
    operationalGoals: [
      {
        id: "og-1",
        strategicGoalId: "sg-1",
        title: "Підтримка малого і середнього бізнесу",
        description: "Програми розвитку підприємництва та локальної економіки.",
      },
      {
        id: "og-2",
        strategicGoalId: "sg-2",
        title: "Модернізація міської мобільності",
        description: "Оновлення транспорту та покращення доступності.",
      },
    ],
    tasks: [
      {
        id: "task-1",
        operationalGoalId: "og-1",
        title: "Створити карту локальних бізнес-програм",
        description: "Зібрати й структурувати всі чинні програми підтримки.",
        status: "in-progress",
      },
      {
        id: "task-2",
        operationalGoalId: "og-2",
        title: "Оцифрувати пріоритетні транспортні проєкти",
        description:
          "Створити перелік і статуси ключових транспортних ініціатив.",
        status: "planned",
      },
    ],
  },
  {
    id: "if-2028",
    title: "Стратегія розвитку Івано-Франківської громади до 2028 року",
    community: "Івано-Франківська громада",
    region: "Івано-Франківська область",
    period: "2020–2028",
    status: "active",
    adoptedAt: "2020-11-10",
    sourceUrl: "https://example.com/if-2028",
    summary:
      "Стратегія громади з акцентом на туризм, екологію, цифровізацію та розвиток людського капіталу.",
    strategicGoals: [
      {
        id: "sg-3",
        title: "Розвиток туристичного потенціалу",
        description: "Посилення ролі громади як туристичного центру.",
      },
    ],
    operationalGoals: [
      {
        id: "og-3",
        strategicGoalId: "sg-3",
        title: "Покращення туристичної інфраструктури",
        description: "Маршрути, навігація, цифрові сервіси для відвідувачів.",
      },
    ],
    tasks: [
      {
        id: "task-3",
        operationalGoalId: "og-3",
        title: "Створити каталог туристичних об’єктів",
        description:
          "Зібрати базовий перелік локацій для подальшого відображення.",
        status: "done",
      },
    ],
  },
];
