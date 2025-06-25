export type AppStackParamList = {
   // Onboarding: undefined;
    //Cadastro: undefined;
    //Login: undefined;
    LogInScreen: undefined; 
    ResetPasswordScreen: undefined;
    SignInScreen: undefined;
    //YourEventsScreen: undefined;
    //EventDetail: { eventId: string };
    ActivityDetailScreen: { eventId: string }; 
    Main: undefined;
  };
  
  export type MainTabParamList = {
    Home: undefined;
    Explore: undefined;
    Atividades: undefined;
    Configurações: undefined;
  };

  export type ActivityStackParamList = {
    ActivityScreen: undefined;
    CreateActivityScreen: undefined;
    //YourEventsScreen: undefined;
    //EventDetail: { eventId: string };
    ActivityDetailScreen: { eventId: string };
    EditActivityScreen: { eventId: string};
};
  
 // export type RootStackParamList = AppStackParamList & MainTabParamList;

 