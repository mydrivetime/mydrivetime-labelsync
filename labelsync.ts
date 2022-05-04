import {label, labelsync, repo} from "label-sync";

/* Repository */
import { prisma } from "./repos/prisma";
import { github } from "./repos/github";


const shared = [
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
    name: "feature",
    color: "#a2eeef",
    description: "",
  }),
  label({
    name: "identity server",
    color: "#ffa930",
    description: "",
  }),
  label({
    name: "r&d",
    color: "#C2E0C6",
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
        ...shared
      ],
    }),
    "mobile-app": repo({
      config: {
        removeUnconfiguredLabels: true,
      },
      labels: [
          ...github,
          ...shared
      ],
    }),
    "backend": repo({
      config: {
        removeUnconfiguredLabels: true,
      },
      labels: [
        ...github,
        ...shared
      ],
    }),
    "web-app": repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [
        ...github,
        ...shared
      ],
    }),
  },
});
