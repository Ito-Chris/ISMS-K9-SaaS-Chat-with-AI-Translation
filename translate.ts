type Dict = Record<string, Record<string, string>>;

const dictionaries: Dict = {
  es: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "¡Buenos días a todos! Recordatorio: la revisión de diseño se movió a las 2pm hoy.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Gracias Priya — traeré los mockups actualizados del flujo de incorporación.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Perfecto. Prepararé los números de analítica para vincular el flujo con la activación.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Ronda de café a las 10:30 si alguien se apunta ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "El borrador de la especificación de facturación ya está. Se agradece feedback antes del viernes.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Lo revisé — la sección de ruta de actualización necesita un plan de reversión.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "De acuerdo. Añadiré una lista de reversión y una compuerta de feature flag.",
    "Nightly build is green again after the cache fix.":
      "La compilación nocturna vuelve a estar en verde tras el arreglo de caché.",
    "Nice. I'll cut the release branch after lunch.":
      "Bien. Cortaré la rama de release después del almuerzo.",
    "Do you have five minutes to look at the empty states?":
      "¿Tienes cinco minutos para revisar los estados vacíos?",
    "Sure — send them over and I'll leave comments.":
      "Claro — envíalos y dejaré comentarios.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Gracias por desbloquear el contrato de la API, me ahorraste un día.",
  },
  fr: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Bonjour à tous ! Rappel : la revue de design est déplacée à 14h aujourd'hui.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Merci Priya — j'apporterai les maquettes mises à jour du parcours d'inscription.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Parfait. Je préparerai les chiffres analytiques pour relier le parcours à l'activation.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Pause café à 10h30 si quelqu'un veut venir ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Le brouillon de la refonte de la facturation est en ligne. Retours bienvenus avant vendredi.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Parcouru — la section du parcours de mise à niveau a besoin d'un plan de retour arrière.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "D'accord. J'ajouterai une liste de retour arrière et un verrou de feature flag.",
    "Nightly build is green again after the cache fix.":
      "La compilation nocturne est de nouveau verte après la correction du cache.",
    "Nice. I'll cut the release branch after lunch.":
      "Bien. Je créerai la branche de release après le déjeuner.",
    "Do you have five minutes to look at the empty states?":
      "As-tu cinq minutes pour regarder les états vides ?",
    "Sure — send them over and I'll leave comments.":
      "Bien sûr — envoie-les et je laisserai des commentaires.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Merci d'avoir débloqué le contrat API, ça m'a fait gagner un jour.",
  },
  de: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Guten Morgen allerseits! Erinnerung: Das Design-Review wurde heute auf 14 Uhr verschoben.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Danke Priya — ich bringe die aktualisierten Mockups des Onboarding-Flows mit.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Perfekt. Ich bereite die Analytics-Zahlen vor, um den Flow mit der Aktivierung zu verknüpfen.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Kaffeerunde um 10:30, falls jemand mitkommen möchte ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Der Spezifikationsentwurf für die Abrechnungsüberarbeitung ist online. Feedback bis Freitag willkommen.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Überflogen — der Abschnitt zum Upgrade-Pfad braucht einen Rollback-Plan.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Einverstanden. Ich füge eine Rollback-Checkliste und ein Feature-Flag-Gate hinzu.",
    "Nightly build is green again after the cache fix.":
      "Der nächtliche Build ist nach dem Cache-Fix wieder grün.",
    "Nice. I'll cut the release branch after lunch.":
      "Schön. Ich erstelle den Release-Branch nach dem Mittagessen.",
    "Do you have five minutes to look at the empty states?":
      "Hast du fünf Minuten, um dir die leeren Zustände anzusehen?",
    "Sure — send them over and I'll leave comments.":
      "Klar — schick sie rüber, ich hinterlasse Kommentare.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Danke, dass du den API-Vertrag entblockt hast, das hat mir einen Tag gespart.",
  },
  it: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Buongiorno a tutti! Promemoria: la revisione del design è spostata alle 14 di oggi.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Grazie Priya — porterò i mockup aggiornati del flusso di onboarding.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Perfetto. Preparerò i numeri di analytics per collegare il flusso all'attivazione.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Giro per il caffè alle 10:30, chi vuole si unisca ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "La bozza delle specifiche per la revisione della fatturazione è pronta. Feedback gradito entro venerdì.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Dato un'occhiata — la sezione del percorso di upgrade necessita di un piano di rollback.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "D'accordo. Aggiungerò una checklist di rollback e un gate feature-flag.",
    "Nightly build is green again after the cache fix.":
      "La build notturna è di nuovo verde dopo la correzione della cache.",
    "Nice. I'll cut the release branch after lunch.":
      "Bene. Creerò il branch di release dopo pranzo.",
    "Do you have five minutes to look at the empty states?":
      "Hai cinque minuti per dare un'occhiata agli stati vuoti?",
    "Sure — send them over and I'll leave comments.":
      "Certo — mandali e lascerò dei commenti.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Grazie per aver sbloccato il contratto API, mi hai fatto risparmiare un giorno.",
  },
  pt: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Bom dia a todos! Lembrete: a revisão de design foi movida para as 14h de hoje.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Obrigado Priya — vou trazer os mockups atualizados do fluxo de onboarding.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Perfeito. Vou preparar os números de analytics para ligar o fluxo à ativação.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Ida ao café às 10:30, quem quiser vem ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "O rascunho da especificação da reformulação de cobrança está pronto. Feedback bem-vindo antes de sexta.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Dei uma olhada — a seção do caminho de upgrade precisa de um plano de rollback.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Concordo. Vou adicionar uma checklist de rollback e um gate de feature flag.",
    "Nightly build is green again after the cache fix.":
      "A build noturna voltou a ficar verde após a correção do cache.",
    "Nice. I'll cut the release branch after lunch.":
      "Boa. Vou criar a branch de release depois do almoço.",
    "Do you have five minutes to look at the empty states?":
      "Você tem cinco minutos para olhar os estados vazios?",
    "Sure — send them over and I'll leave comments.":
      "Claro — manda e eu deixo comentários.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Obrigado por desbloquear o contrato da API, me poupou um dia.",
  },
  nl: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Goedemorgen allemaal! Herinnering: de designreview is vandaag verplaatst naar 14:00.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Bedankt Priya — ik neem de bijgewerkte mockups van de onboardingflow mee.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Perfect. Ik bereid de analytics-cijfers voor zodat we de flow aan activatie kunnen koppelen.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Koffieronde om 10:30, wie wil mee ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Het concept van de specificatie voor de facturatievernieuwing staat online. Feedback welkom voor vrijdag.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Doorgenomen — de sectie over het upgradepad heeft een rollbackplan nodig.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Eens. Ik voeg een rollbackchecklist en een feature-flag-gate toe.",
    "Nightly build is green again after the cache fix.":
      "De nightly build is weer groen na de cache-fix.",
    "Nice. I'll cut the release branch after lunch.":
      "Mooi. Ik maak de releasebranch na de lunch.",
    "Do you have five minutes to look at the empty states?":
      "Heb je vijf minuten om naar de lege staten te kijken?",
    "Sure — send them over and I'll leave comments.":
      "Zeker — stuur ze door en ik laat opmerkingen achter.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Bedankt voor het deblokkeren van het API-contract, scheelde me een dag.",
  },
  ru: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Доброе утро всем! Напоминание: ревью дизайна сегодня перенесено на 14:00.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Спасибо, Прия — принесу обновлённые макеты онбординг-флоу.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Отлично. Подготовлю аналитические данные, чтобы связать флоу с активацией.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Кофе-пауза в 10:30, присоединяйтесь ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Черновик спецификации по переработке биллинга готов. Ждём отзывы до пятницы.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Просмотрел — разделу пути обновления нужен план отката.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Согласен. Добавлю чек-лист отката и гейт фича-флага.",
    "Nightly build is green again after the cache fix.":
      "Ночная сборка снова зелёная после исправления кэша.",
    "Nice. I'll cut the release branch after lunch.":
      "Хорошо. Создам релизную ветку после обеда.",
    "Do you have five minutes to look at the empty states?":
      "У тебя есть пять минут, чтобы взглянуть на пустые состояния?",
    "Sure — send them over and I'll leave comments.":
      "Конечно — пришли, я оставлю комментарии.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Спасибо за разблокировку API-контракта, сэкономил мне день.",
  },
  pl: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Dzień dobry wszystkim! Przypomnienie: przegląd designu przeniesiony dziś na 14:00.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Dzięki Priya — przyniosę zaktualizowane makiety przepływu onboardingu.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Świetnie. Przygotuję dane analityczne, aby powiązać przepływ z aktywacją.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Wyjście na kawę o 10:30, kto chce dołączyć ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Wersja robocza specyfikacji przebudowy rozliczeń jest gotowa. Opinie mile widziane do piątku.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Przejrzałem — sekcja ścieżki aktualizacji wymaga planu wycofania.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Zgoda. Dodam listę kontrolną wycofania i bramkę feature flag.",
    "Nightly build is green again after the cache fix.":
      "Nocny build znów jest zielony po poprawce cache.",
    "Nice. I'll cut the release branch after lunch.":
      "Dobrze. Utworzę gałąź wydania po lunchu.",
    "Do you have five minutes to look at the empty states?":
      "Masz pięć minut, żeby spojrzeć na stany puste?",
    "Sure — send them over and I'll leave comments.":
      "Jasne — wyślij, zostawię komentarze.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Dzięki za odblokowanie kontraktu API, zaoszczędziłeś mi dzień.",
  },
  tr: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Herkese günaydın! Hatırlatma: tasarım incelemesi bugün saat 14:00'e alındı.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Teşekkürler Priya — güncellenmiş onboarding akışı maketlerini getireceğim.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Mükemmel. Akışı aktivasyona bağlamak için analitik sayılarını hazırlayacağım.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "10:30'da kahve molası, katılmak isteyen buyursun ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Faturalama yenilemesi için taslak şartname yayında. Cuma'dan önce geri bildirim memnuniyetle karşılanır.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Göz attım — yükseltme yolu bölümü için bir geri alma planı gerekiyor.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Katılıyorum. Bir geri alma kontrol listesi ve feature-flag kapısı ekleyeceğim.",
    "Nightly build is green again after the cache fix.":
      "Önbellek düzeltmesinden sonra gece derlemesi yeniden yeşil.",
    "Nice. I'll cut the release branch after lunch.":
      "Güzel. Öğle yemeğinden sonra sürüm dalını oluşturacağım.",
    "Do you have five minutes to look at the empty states?":
      "Boş durumlara bakmak için beş dakikan var mı?",
    "Sure — send them over and I'll leave comments.":
      "Tabii — gönder, yorum bırakırım.",
    "Thanks for unblocking the API contract, saved me a day.":
      "API sözleşmesini açtığın için teşekkürler, bana bir gün kazandırdın.",
  },
  hi: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "सुप्रभात सभी को! याद दिलाना चाहता हूँ कि डिज़ाइन समीक्षा आज दोपहर 2 बजे स्थानांतरित हो गई है।",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "धन्यवाद प्रिया — मैं अपडेटेड ऑनबोर्डिंग फ़्लो के मॉकअप लेकर आऊँगा।",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "बहुत बढ़िया। मैं एनालिटिक्स के आंकड़े तैयार करूँगा ताकि फ़्लो को एक्टिवेशन से जोड़ सकें।",
    "Coffee run at 10:30 if anyone wants in ☕":
      "10:30 बजे कॉफ़ी के लिए चल रहे हैं, कोई चाहे तो आ जाए ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "बिलिंग सुधार का ड्राफ़्ट स्पेक तैयार है। शुक्रवार से पहले फ़ीडबैक का स्वागत है।",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "देख लिया — अपग्रेड पाथ सेक्शन के लिए रोलबैक योजना चाहिए।",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "सहमत। मैं रोलबैक चेकलिस्ट और फ़ीचर-फ़्लैग गेट जोड़ूँगा।",
    "Nightly build is green again after the cache fix.":
      "कैश फ़िक्स के बाद नाइटली बिल्ड फिर से हरा है।",
    "Nice. I'll cut the release branch after lunch.":
      "बढ़िया। लंच के बाद रिलीज़ ब्रांच बनाऊँगा।",
    "Do you have five minutes to look at the empty states?":
      "क्या आपके पास खाली स्थितियों को देखने के लिए पाँच मिनट हैं?",
    "Sure — send them over and I'll leave comments.":
      "ज़रूर — भेज दीजिए, मैं टिप्पणियाँ छोड़ दूँगा।",
    "Thanks for unblocking the API contract, saved me a day.":
      "API कॉन्ट्रैक्ट अनब्लॉक करने के लिए धन्यवाद, एक दिन बच गया।",
  },
  bn: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "সবাইকে শুভ সকাল! মনে করিয়ে দিচ্ছি, ডিজাইন রিভিউ আজ দুপুর ২টায় সরানো হয়েছে।",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "ধন্যবাদ প্রিয়া — আমি আপডেট করা অনবোর্ডিং ফ্লোর মকআপ নিয়ে আসব।",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "দারুণ। আমি অ্যানালিটিক্সের সংখ্যা প্রস্তুত করব যাতে ফ্লোকে অ্যাক্টিভেশনের সাথে যুক্ত করা যায়।",
    "Coffee run at 10:30 if anyone wants in ☕":
      "১০:৩০-এ কফি ব্রেক, কেউ চাইলে যোগ দিতে পারেন ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "বিলিং সংস্কারের ড্রাফট স্পেক প্রকাশিত হয়েছে। শুক্রবারের আগে মতামত স্বাগত।",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "দেখে নিলাম — আপগ্রেড পাথ অংশে একটি রোলব্যাক পরিকল্পনা দরকার।",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "সম্মত। আমি একটি রোলব্যাক চেকলিস্ট ও ফিচার-ফ্ল্যাগ গেট যোগ করব।",
    "Nightly build is green again after the cache fix.":
      "ক্যাশ ঠিক করার পর নাইটলি বিল্ড আবার সবুজ।",
    "Nice. I'll cut the release branch after lunch.":
      "ভালো। দুপুরের খাবারের পর রিলিজ ব্রাঞ্চ তৈরি করব।",
    "Do you have five minutes to look at the empty states?":
      "খালি অবস্থাগুলো দেখতে কি আপনার পাঁচ মিনিট সময় আছে?",
    "Sure — send them over and I'll leave comments.":
      "অবশ্যই — পাঠিয়ে দিন, আমি মন্তব্য রেখে দেব।",
    "Thanks for unblocking the API contract, saved me a day.":
      "API চুক্তি আনব্লক করার জন্য ধন্যবাদ, একদিন বাঁচিয়ে দিলেন।",
  },
  ur: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "سب کو صبح بخیر! یاد دہانی: ڈیزائن ریویو آج دوپہر 2 بجے منتقل کر دیا گیا ہے۔",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "شکریہ پریا — میں اپ ڈیٹ شدہ آن بورڈنگ فلو کے ماک اپس لاؤں گا۔",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "بہترین۔ میں اینالیٹکس کے اعداد تیار کروں گا تاکہ فلو کو ایکٹیویشن سے جوڑ سکیں۔",
    "Coffee run at 10:30 if anyone wants in ☕":
      "10:30 پر کافی کے لیے چل رہے ہیں، جو چاہے شامل ہو ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "بلنگ کی تجدید کا ڈرافٹ اسپیک دستیاب ہے۔ جمعہ سے پہلے رائے کا خیرمقدم ہے۔",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "دیکھ لیا — اپ گریڈ پاتھ والے حصے کے لیے رول بیک پلان درکار ہے۔",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "متفق۔ میں رول بیک چیک لسٹ اور فیچر فلیگ گیٹ شامل کروں گا۔",
    "Nightly build is green again after the cache fix.":
      "کیش فکس کے بعد نائٹلی بلڈ دوبارہ سبز ہے۔",
    "Nice. I'll cut the release branch after lunch.":
      "اچھا۔ دوپہر کے کھانے کے بعد ریلیز برانچ بناؤں گا۔",
    "Do you have five minutes to look at the empty states?":
      "کیا آپ کے پاس خالی حالتوں کو دیکھنے کے لیے پانچ منٹ ہیں؟",
    "Sure — send them over and I'll leave comments.":
      "ضرور — بھیج دیں، میں تبصرے چھوڑ دوں گا۔",
    "Thanks for unblocking the API contract, saved me a day.":
      "API کنٹریکٹ ان بلاک کرنے کا شکریہ، ایک دن بچ گیا۔",
  },
  ar: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "صباح الخير للجميع! تذكير: تم نقل مراجعة التصميم إلى الساعة 2 بعد الظهر اليوم.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "شكرًا بريا — سأحضر النماذج المحدّثة لمسار التسجيل.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "ممتاز. سأجهّز أرقام التحليلات حتى نربط المسار بالتفعيل.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "جولة قهوة الساعة 10:30 لمن يرغب ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "مسودة مواصفات تجديد الفوترة جاهزة. نرحّب بالملاحظات قبل الجمعة.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "تصفّحتها — يحتاج قسم مسار الترقية إلى خطة تراجع.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "موافق. سأضيف قائمة تراجع وبوابة علم ميزة.",
    "Nightly build is green again after the cache fix.":
      "أصبح البناء الليلي أخضر مجددًا بعد إصلاح الذاكرة المؤقتة.",
    "Nice. I'll cut the release branch after lunch.":
      "جيد. سأنشئ فرع الإصدار بعد الغداء.",
    "Do you have five minutes to look at the empty states?":
      "هل لديك خمس دقائق للنظر في الحالات الفارغة؟",
    "Sure — send them over and I'll leave comments.":
      "بالتأكيد — أرسلها وسأترك تعليقات.",
    "Thanks for unblocking the API contract, saved me a day.":
      "شكرًا لإزالة العائق عن عقد الـ API، وفّرت عليّ يومًا.",
  },
  he: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "בוקר טוב לכולם! תזכורת: סקירת העיצוב הועברה להיום בשעה 14:00.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "תודה פריה — אביא את המוקאפים המעודכנים של תהליך ההצטרפות.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "מושלם. אכין את נתוני האנליטיקה כדי לקשור את התהליך להפעלה.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "יציאה לקפה ב-10:30, מי שרוצה מוזמן ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "טיוטת המפרט לשיפוץ החיוב זמינה. נשמח למשוב לפני יום שישי.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "עברתי על זה — פרק מסלול השדרוג צריך תוכנית חזרה לאחור.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "מסכים. אוסיף רשימת בדיקה לחזרה לאחור ושער feature flag.",
    "Nightly build is green again after the cache fix.":
      "הבנייה הלילית ירוקה שוב לאחר תיקון המטמון.",
    "Nice. I'll cut the release branch after lunch.":
      "מעולה. אצור את ענף השחרור אחרי הצהריים.",
    "Do you have five minutes to look at the empty states?":
      "יש לך חמש דקות להסתכל על המצבים הריקים?",
    "Sure — send them over and I'll leave comments.":
      "בטח — שלח, אשאיר הערות.",
    "Thanks for unblocking the API contract, saved me a day.":
      "תודה ששחררת את חוזה ה-API, חסכת לי יום.",
  },
  fa: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "صبح بخیر به همه! یادآوری: بازبینی طراحی امروز به ساعت ۲ بعدازظهر منتقل شد.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "ممنون پریا — ماکت‌های به‌روزشده جریان آنبوردینگ را می‌آورم.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "عالی. اعداد تحلیلی را آماده می‌کنم تا جریان را به فعال‌سازی گره بزنیم.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "ساعت ۱۰:۳۰ برای قهوه می‌رویم، هرکس خواست بیاید ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "پیش‌نویس مشخصات بازنگری صورت‌حساب آماده است. بازخورد تا جمعه خوش‌آمد است.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "مرور کردم — بخش مسیر ارتقا به طرح بازگردانی نیاز دارد.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "موافقم. یک چک‌لیست بازگردانی و دروازه فیچر فلگ اضافه می‌کنم.",
    "Nightly build is green again after the cache fix.":
      "بیلد شبانه پس از رفع مشکل کش دوباره سبز شد.",
    "Nice. I'll cut the release branch after lunch.":
      "خوب. بعد از ناهار شاخه انتشار را می‌سازم.",
    "Do you have five minutes to look at the empty states?":
      "پنج دقیقه وقت داری حالت‌های خالی را ببینی؟",
    "Sure — send them over and I'll leave comments.":
      "حتماً — بفرست، نظر می‌گذارم.",
    "Thanks for unblocking the API contract, saved me a day.":
      "ممنون که قرارداد API را باز کردی، یک روز صرفه‌جویی شد.",
  },
  ja: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "おはようございます！本日のデザインレビューは午後2時に変更になりました。",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "ありがとうプリヤ — 更新したオンボーディングフローのモックアップを持っていきます。",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "完璧です。フローをアクティベーションに結びつけられるよう、分析数値を準備します。",
    "Coffee run at 10:30 if anyone wants in ☕":
      "10:30にコーヒー休憩、参加したい人はどうぞ ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "請求刷新の仕様ドラフトを公開しました。金曜日までにフィードバックをお願いします。",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "ざっと見ました — アップグレード経路の節にはロールバック計画が必要です。",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "同意です。ロールバックのチェックリストとフィーチャーフラグのゲートを追加します。",
    "Nightly build is green again after the cache fix.":
      "キャッシュ修正後、ナイトリービルドが再びグリーンになりました。",
    "Nice. I'll cut the release branch after lunch.":
      "いいですね。昼食後にリリースブランチを切ります。",
    "Do you have five minutes to look at the empty states?":
      "空の状態を確認するのに5分もらえますか？",
    "Sure — send them over and I'll leave comments.":
      "もちろん — 送ってください、コメントを残します。",
    "Thanks for unblocking the API contract, saved me a day.":
      "API契約をアンブロックしてくれてありがとう、1日節約できました。",
  },
  ko: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "모두 좋은 아침입니다! 알림: 디자인 리뷰가 오늘 오후 2시로 옮겨졌습니다.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "고마워요 Priya — 업데이트된 온보딩 플로우 목업을 가져올게요.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "완벽해요. 플로우를 활성화와 연결할 수 있도록 분석 수치를 준비할게요.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "10:30에 커피 마시러 가요, 원하시면 함께해요 ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "결제 개편 사양 초안이 올라왔습니다. 금요일 전까지 피드백 환영합니다.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "훑어봤어요 — 업그레이드 경로 섹션에 롤백 계획이 필요합니다.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "동의합니다. 롤백 체크리스트와 피처 플래그 게이트를 추가할게요.",
    "Nightly build is green again after the cache fix.":
      "캐시 수정 후 야간 빌드가 다시 초록입니다.",
    "Nice. I'll cut the release branch after lunch.":
      "좋아요. 점심 후에 릴리스 브랜치를 만들게요.",
    "Do you have five minutes to look at the empty states?":
      "빈 상태를 볼 5분 있으신가요?",
    "Sure — send them over and I'll leave comments.":
      "물론이죠 — 보내주시면 코멘트 남길게요.",
    "Thanks for unblocking the API contract, saved me a day.":
      "API 계약을 풀어주셔서 감사합니다, 하루를 아꼈어요.",
  },
  zh: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "大家早上好！提醒一下，设计评审今天改到下午2点。",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "谢谢 Priya — 我会带上更新后的新手引导流程原型。",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "太好了。我会准备好分析数据，把流程和激活率关联起来。",
    "Coffee run at 10:30 if anyone wants in ☕":
      "10:30 去喝咖啡，想一起的来 ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "计费改版的规格草案已发布。欢迎在周五前反馈。",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "看过了 — 升级路径部分需要一个回滚方案。",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "同意。我会加上回滚清单和功能开关门控。",
    "Nightly build is green again after the cache fix.":
      "修复缓存后，夜间构建又变绿了。",
    "Nice. I'll cut the release branch after lunch.":
      "不错。午饭后我来切发布分支。",
    "Do you have five minutes to look at the empty states?":
      "你有五分钟看看空状态吗？",
    "Sure — send them over and I'll leave comments.":
      "当然 — 发过来，我会留评论。",
    "Thanks for unblocking the API contract, saved me a day.":
      "谢谢你解除 API 合约的阻塞，帮我省了一天。",
  },
  "zh-TW": {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "大家早安！提醒一下，設計審查今天改到下午2點。",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "謝謝 Priya — 我會帶上更新後的新手引導流程原型。",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "太好了。我會準備好分析數據，把流程和啟用率關聯起來。",
    "Coffee run at 10:30 if anyone wants in ☕":
      "10:30 去喝咖啡，想一起的來 ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "帳務改版的規格草案已發布。歡迎在週五前回饋。",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "看過了 — 升級路徑部分需要一個回復方案。",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "同意。我會加上回復清單和功能開關閘道。",
    "Nightly build is green again after the cache fix.":
      "修好快取後，夜間建置又變綠了。",
    "Nice. I'll cut the release branch after lunch.":
      "不錯。午餐後我來切發布分支。",
    "Do you have five minutes to look at the empty states?":
      "你有五分鐘看看空狀態嗎？",
    "Sure — send them over and I'll leave comments.":
      "當然 — 傳過來，我會留評論。",
    "Thanks for unblocking the API contract, saved me a day.":
      "謝謝你解除 API 合約的阻塞，幫我省了一天。",
  },
  vi: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Chào buổi sáng mọi người! Nhắc nhở: buổi đánh giá thiết kế hôm nay dời sang 2 giờ chiều.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Cảm ơn Priya — tôi sẽ mang bản mockup đã cập nhật của luồng onboarding.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Tuyệt. Tôi sẽ chuẩn bị số liệu phân tích để gắn luồng với tỷ lệ kích hoạt.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Đi uống cà phê lúc 10:30, ai muốn thì tham gia ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Bản nháp đặc tả cho việc cải tổ thanh toán đã có. Hoan nghênh góp ý trước thứ Sáu.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Đã xem qua — phần lộ trình nâng cấp cần một kế hoạch khôi phục.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Đồng ý. Tôi sẽ thêm danh sách khôi phục và cổng feature flag.",
    "Nightly build is green again after the cache fix.":
      "Bản build ban đêm đã xanh trở lại sau khi sửa cache.",
    "Nice. I'll cut the release branch after lunch.":
      "Tốt. Tôi sẽ tạo nhánh release sau bữa trưa.",
    "Do you have five minutes to look at the empty states?":
      "Bạn có năm phút để xem các trạng thái trống không?",
    "Sure — send them over and I'll leave comments.":
      "Được — gửi qua đi, tôi sẽ để lại nhận xét.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Cảm ơn đã gỡ vướng hợp đồng API, giúp tôi tiết kiệm một ngày.",
  },
  th: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "อรุณสวัสดิ์ทุกคน! แจ้งเตือน: การรีวิวดีไซน์เลื่อนไปเป็นบ่าย 2 โมงวันนี้",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "ขอบคุณ Priya — ฉันจะเอา mockup ของ onboarding flow ที่อัปเดตแล้วมา",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "เยี่ยม ฉันจะเตรียมตัวเลข analytics เพื่อเชื่อม flow กับการเปิดใช้งาน",
    "Coffee run at 10:30 if anyone wants in ☕":
      "ไปดื่มกาแฟตอน 10:30 ใครอยากไปด้วยเชิญ ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "ร่างสเปกสำหรับการปรับระบบเรียกเก็บเงินพร้อมแล้ว ยินดีรับฟีดแบ็กก่อนวันศุกร์",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "อ่านผ่านแล้ว — ส่วนเส้นทางการอัปเกรดต้องมีแผนย้อนกลับ",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "เห็นด้วย ฉันจะเพิ่มเช็กลิสต์การย้อนกลับและเกต feature flag",
    "Nightly build is green again after the cache fix.":
      "ไนต์ลีบิลด์กลับมาเขียวอีกครั้งหลังแก้แคช",
    "Nice. I'll cut the release branch after lunch.":
      "ดี ฉันจะสร้างรีลีสบรานช์หลังมื้อเที่ยง",
    "Do you have five minutes to look at the empty states?":
      "คุณมีห้านาทีดูสถานะว่างไหม",
    "Sure — send them over and I'll leave comments.":
      "ได้เลย — ส่งมาได้ ฉันจะคอมเมนต์ไว้",
    "Thanks for unblocking the API contract, saved me a day.":
      "ขอบคุณที่ปลดล็อกสัญญา API ช่วยประหยัดเวลาไปหนึ่งวัน",
  },
  id: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Selamat pagi semua! Pengingat: review desain dipindah ke pukul 14.00 hari ini.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Terima kasih Priya — saya akan membawa mockup alur onboarding yang diperbarui.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Sempurna. Saya akan menyiapkan angka analitik agar alur bisa dikaitkan dengan aktivasi.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Ngopi jam 10:30, yang mau ikut silakan ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Draf spesifikasi perombakan penagihan sudah tersedia. Masukan diterima sebelum Jumat.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Sudah saya baca — bagian jalur upgrade perlu rencana rollback.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Setuju. Saya akan menambahkan checklist rollback dan gate feature flag.",
    "Nightly build is green again after the cache fix.":
      "Build malam kembali hijau setelah perbaikan cache.",
    "Nice. I'll cut the release branch after lunch.":
      "Bagus. Saya akan membuat branch rilis setelah makan siang.",
    "Do you have five minutes to look at the empty states?":
      "Punya lima menit untuk melihat empty state?",
    "Sure — send them over and I'll leave comments.":
      "Tentu — kirim saja, saya akan tinggalkan komentar.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Terima kasih sudah membuka blokir kontrak API, menghemat satu hari saya.",
  },
  tl: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Magandang umaga sa lahat! Paalala: inilipat sa 2pm ngayon ang design review.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Salamat Priya — dadalhin ko ang updated na mockups ng onboarding flow.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Perpekto. Ihahanda ko ang analytics numbers para maiugnay ang flow sa activation.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Kapehan sa 10:30 kung may gustong sumama ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Nai-post na ang draft spec para sa billing revamp. Malugod na tinatanggap ang feedback bago ang Biyernes.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Binasa ko — kailangan ng rollback plan ang seksyon ng upgrade path.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Sang-ayon. Magdadagdag ako ng rollback checklist at feature-flag gate.",
    "Nightly build is green again after the cache fix.":
      "Berde na muli ang nightly build pagkatapos ng cache fix.",
    "Nice. I'll cut the release branch after lunch.":
      "Ayos. Gagawin ko ang release branch pagkatapos ng tanghalian.",
    "Do you have five minutes to look at the empty states?":
      "May limang minuto ka ba para tingnan ang mga empty state?",
    "Sure — send them over and I'll leave comments.":
      "Sige — ipadala mo at mag-iiwan ako ng mga komento.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Salamat sa pag-unblock ng API contract, nakatipid ako ng isang araw.",
  },
  ceb: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Maayong buntag sa tanan! Pahinumdom: gibalhin sa 2pm karon ang design review.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Salamat Priya — dad-on nako ang updated nga mockups sa onboarding flow.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Perpekto. Andamon nako ang analytics numbers aron maikonektar ang flow sa activation.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Kapehan sa 10:30 kung naay ganahan moapil ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Na-post na ang draft spec sa billing revamp. Gidawat ang feedback antes sa Biyernes.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Gibasa nako — kinahanglan og rollback plan ang seksyon sa upgrade path.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Uyon ko. Magdugang ko og rollback checklist ug feature-flag gate.",
    "Nightly build is green again after the cache fix.":
      "Berde na usab ang nightly build human sa cache fix.",
    "Nice. I'll cut the release branch after lunch.":
      "Maayo. Maghimo ko og release branch human sa paniudto.",
    "Do you have five minutes to look at the empty states?":
      "Naa kay lima ka minuto aron tan-awon ang mga empty state?",
    "Sure — send them over and I'll leave comments.":
      "Sige — ipadala lang ug magbilin ko og mga komento.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Salamat sa pag-unblock sa API contract, nakatipig ko og usa ka adlaw.",
  },
  sw: {
    "Morning everyone! Reminder that the design review moved to 2pm today.":
      "Habari za asubuhi wote! Kumbusho: ukaguzi wa muundo umehamishwa hadi saa 8 mchana leo.",
    "Thanks Priya — I'll bring the updated onboarding flow mockups.":
      "Asante Priya — nitaleta michoro iliyosasishwa ya mtiririko wa kujiunga.",
    "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.":
      "Vizuri. Nitaandaa takwimu za uchanganuzi ili kuunganisha mtiririko na uanzishaji.",
    "Coffee run at 10:30 if anyone wants in ☕":
      "Kwenda kunywa kahawa saa 4:30 asubuhi, yeyote anayetaka ajiunge ☕",
    "Draft spec for the billing revamp is up. Feedback welcome before Friday.":
      "Rasimu ya maelezo ya maboresho ya bili imewekwa. Maoni yanakaribishwa kabla ya Ijumaa.",
    "Skimmed it — the upgrade path section needs a rollback plan.":
      "Nimeipitia — sehemu ya njia ya kuboresha inahitaji mpango wa kurudi nyuma.",
    "Agreed. I'll add a rollback checklist and a feature-flag gate.":
      "Nakubali. Nitaongeza orodha ya kurudi nyuma na lango la feature flag.",
    "Nightly build is green again after the cache fix.":
      "Ujenzi wa usiku umekuwa kijani tena baada ya kurekebisha akiba.",
    "Nice. I'll cut the release branch after lunch.":
      "Vizuri. Nitaunda tawi la toleo baada ya chakula cha mchana.",
    "Do you have five minutes to look at the empty states?":
      "Una dakika tano kuangalia hali tupu?",
    "Sure — send them over and I'll leave comments.":
      "Sawa — nitume, nitaacha maoni.",
    "Thanks for unblocking the API contract, saved me a day.":
      "Asante kwa kufungua mkataba wa API, umeniokoa siku moja.",
  },
};

export function translate(text: string, lang: string): string {
  if (lang === "en") return text;
  const table = dictionaries[lang];
  if (!table) return text;
  return table[text] ?? text;
}