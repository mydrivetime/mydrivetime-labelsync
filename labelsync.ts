import {label, labelsync, repo} from "label-sync";

/* Repository */
import { prisma } from "./repos/prisma";
import { github } from "./repos/github";

const backend = [
  label({
    name: "api",
    color: "#FBCA04",
    description: "",
  }),
  label({
    name: "architecture",
    color: "#fc5203",
    description: "",
  }),
  label({
    name: "data capture",
    color: "#65DE4A",
    description: "",
  }),
  label({
    name: "identity server",
    color: "#ffa930",
    description: "",
  }),
  label({
    name: "user migration",
    color: "#c92884",
    description: "",
  }),
  label({
    name: "localisation?",
    color: "#5319e7",
    description: "",
  }),
]

const webapp = [
  label({
    name: "waiting-on-api",
    color: "#db1894",
    description: "",
  }),
  label({
    name: "ux",
    color: "#e267ff",
    description: "",
  }),
  label({
    name: "alpha feedback",
    color: "#ADC318",
    description: "Feedback given by an Alpha tester",
  })
]

const mobileapp = [
  label({
    name: "ios",
    color: "#1846db",
    description: "",
  }),
  label({
    name: "android",
    color: "#18db38",
    description: "",
  }),
  label({
    name: "ux",
    color: "#e267ff",
    description: "",
  }),
  label({
    name: "alpha feedback",
    color: "#ADC318",
    description: "Feedback given by an Alpha tester",
  })
]

const shared = [
  label({
    name: "feature",
    color: "#a2eeef",
    description: "",
  }),
  label({
    name: "r&d",
    color: "#C2E0C6",
    description: "",
  }),
  label({
    name: "work item",
    color: "#33a9a9",
    description: "",
  }),
  label({
    name: "priority",
    color: "#bb6118",
    description: "",
  }),
]

/* Config */
labelsync({
  repos: {
    /* Check presets in the repos folder. */
    // prisma,
    // github,
    /* Personalized repositories */

    "roadmap": repo({
      config: {
        removeUnconfiguredLabels: true,
      },
      labels: [
        ...github,
        ...shared,
        ...backend
      ],
    }),
    "mobile-app": repo({
      config: {
        removeUnconfiguredLabels: true,
      },
      labels: [
          ...github,
          ...shared,
          ...mobileapp
      ],
    }),
    "backend": repo({
      config: {
        removeUnconfiguredLabels: true,
      },
      labels: [
        ...github,
        ...shared,
        ...backend
      ],
    }),
    "web-app": repo({
      config: {
        removeUnconfiguredLabels: true,
      },
      labels: [
        ...github,
        ...shared,
        ...webapp
      ],
    }),
  },
});
