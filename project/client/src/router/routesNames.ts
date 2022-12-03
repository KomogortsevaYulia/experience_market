import Vue from "vue";

export interface IRoutesNames {
  home: string;

  authLogin: string;
  authRegister: string;

  projects: string;
  hackathons: string;
  competitions: string;

  profileIndex: string;
  profileSettings: string;
}

const routesNames: Readonly<IRoutesNames> = {
  home: "home",

  authLogin: "authLogin",
  authRegister: "authRegister",

  projects: "projects",
  hackathons: "hackathons",
  competitions: "competitions",

  profileIndex: "profileIndex",
  profileSettings: "profileSettings"
};

declare module "vue/types/vue" {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Vue {
    $routesNames: IRoutesNames;
  }
}

export default routesNames;
