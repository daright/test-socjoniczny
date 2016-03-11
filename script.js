$(document).ready(function(){
	var questions = [
		{question: "Jaki sposób komunikacji z ludźmi jest dla Ciebie bardziej typowy?", 
		choices: ["Nie dostrzegam dystansu między ludźmi zbyt dobrze, preferuje zachowywać się jednakowo między ludzmi.", 
		"Wyczuwam nastawienie ludzi do mnie, wiem na jakim dystansie się z nimi komunikować."],
		score: {ILE:0,LII:0,ESE:1,SEI:1,SLE:0,LSI:0,EIE:1,IEI:1,LIE:0,ILI:0,SEE:1,ESI:1,LSE:0,SLI:0,IEE:1,EII:1}, checked: -1, skipped: false},
		{question: "Jaki rodzaj odpoczynku preferujesz?", 
		choices: ["Aktywny: sport, spacery, chodzenie na zakupy itd.", 
		"Pasywny: czytanie, oglądanie filmów, myślenie lub po prostu marzenie."],
		score: {ESE:0,LSE:0,SLE:0,LSI:0,SEE:0,ESI:0,ILE:1,SEI:1,IEI:1,ILI:1,IEE:1,EII:1}, checked: -1, skipped: false},
		{question: "Do czego przywiązujesz wagę jeśli jesteś pierwszy raz w nieznanym mieście lub kraju?", 
		choices: ["Historii, niespotykanych i unikalnych osobliwości, perspektyw.", 
		"Piękna budynków, rodzaju ubrań jakie ludzie noszą, jakie potrawy jedzą."],
		score: {ILE:0,LII:0,ESE:1,SEI:1,SLE:1,LSI:1,EIE:0,IEI:0,LIE:0,ILI:0,SEE:1,ESI:1,LSE:1,SLI:1,IEE:0,EII:0}, checked: -1, skipped: false},
		{question: "Jak zmienia się Twój nastrój?", 
		choices: ["Często z niezrozumiałych/nieświadomwych powodów.", 
		"Zawsze wiem co jest przyczyną zmiany mojego nastroju."],
		score: {ILE:0,LII:0,ESE:1,SEI:1,SLE:0,LSI:0,EIE:1,IEI:1,LIE:0,ILI:0,SEE:1,ESI:1,LSE:0,SLI:0,IEE:1,EII:1}, checked: -1, skipped: false},
		{question: "Co jest bardziej typowe dla Ciebie?", 
		choices: ["Spięcie mięśni, ciężko jest mi w pełni się zrelaksować.", 
		"Mięśnie są zrelaksowane, ciężko jest mi utrzymać ciągłe napięcie mięśni."],
		score: {ILE:1,LII:1,ESE:1,SEI:1,SLE:0,LSI:0,EIE:0,IEI:0,LIE:0,ILI:0,SEE:0,ESI:0,LSE:1,SLI:1,IEE:1,EII:1}, checked: -1, skipped: false},
		{question: "Co myślisz, że jest charakterystyczne dla Ciebie?", 
		choices: ["Jestem otwartą osobą, lubię pokazywać jak pracuję.", 
		"Jestem powściągliwy, unikam rywalizacji."],
		score: {ESE:0,EIE:0,SLE:0,LSI:0,LIE:0,SEE:0,ESI:0,LSE:0,ILE:1,LII:1,SEI:1,IEI:1,ILI:1,SLI:1,IEE:1,EII:1}, checked: -1, skipped: false},
		{question: "Do czego przykładasz większą uwagę w nowym mieście lub kraju?", 
		choices: ["Cen, zasad, procedur.", 
		"Nastroju ludzi, sposobu ich komunikacji, emocji jakie czują."],
		score: {ILE:0,LII:0,SLE:0,LSI:0,LIE:0,ILI:0,LSE:0,SLI:0,ESE:1,SEI:1,EIE:1,IEI:1,SEE:1,ESI:1,IEE:1,EII:1}, checked: -1, skipped: false},
		{question: "Co jest bardziej typowe dla Ciebie?", 
		choices: ["Zainteresowanie nowościami, jesteś jednym z pierwszych który jest zainteresowany nowym podejściem.", 
		"Preferujesz zwykłe i sprawdzone rzeczy, nie spieszysz się do sprawdzenia nowości."],
		score: {ILE:0,LII:0,IEE:0,EII:0,SLE:1,LSI:1,SEE:1,ESI:1}, checked: -1, skipped: false},
		{question: "Twoje myślenie częściej jest", 
		choices: ["Konkretne, ukierunkowane, efektywne.", 
		"Abstrakcyjne."],
		score: {ESE:0,SEI:0,SLE:0,LSI:0,SEE:0,ESI:0,LSE:0,SLI:0,ILE:1,LII:1,EIE:1,IEI:1,LIE:1,ILI:1,IEE:1,EII:1}, checked: -1, skipped: false},
		{question: "Co jest bardziej typowe dla Ciebie?", 
		choices: ["Pozyskuje więcej informacji ze słów osoby której słucham.", 
		"Pozyskuje więcej informacji ze sposobu, ekspresji i intonacji osoby której słucham."],
		score: {ESE:0,SEI:0,EIE:0,IEI:0,SEE:0,ESI:0,IEE:0,EII:0,ILE:1,LII:1,SLE:1,LSI:1,LIE:1,ILI:1,LSE:1,SLI:1}, checked: -1, skipped: false},
		{question: "Czego częściej Ci brakuje?", 
		choices: ["Informacji.", 
		"Energii."],
		score: {ESE:0, SEI:0, EIE:0, IEI:0, SEE:0, ESI:0, IEE:0, EII:0, ILE:1, LII:1, SLE:1, LSI:1}, checked: -1, skipped: false},
		{question: "Jak zwykle sprzątasz pokój?", 
		choices: ["Staram się sprzątać według ustalonej kolejności.", 
		"Zmieniam kolejność wykonywanych czynności. Nie zależy mi aby sprzątać według ustalonej kolejności "],
		score: {LII:0, ESE:0, LSI:0, EIE:0, LIE:0,ESI:0,LSE:0,EII:0,ILE:1,SEI:1,SLE: 1,IEI:1,ILI:1,SEE:1,SLI:1,IEE:1}, checked: -1, skipped: false},
		{question: "Co bardziej pasuje do Ciebie?", 
		choices: ["Starać się zbyt bardzo, dążyć do perfekcjonizmu.", 
		"Hamować się, nie potrzebuje być perfekcyjny."],
		score: {ILE:1,LII:0,ESE:0,SEI:1,SLE:1,LSI:1,EIE:1,IEI:1,LIE:0,ILI:1,SEE:1,ESI:0,LSE:0,SLI:1,IEE:1,EII:0},checked: -1, skipped: false},
		{question: "Z czym sobie lepiej radzisz?", 
		choices: ["Faktami, danymi, wydarzeniami.", 
		"Relacjami międzyludzkimi i sympatiamii."],
		score: {ILE:0,LII:0,ESE:1,SEI:1,SLE:0,LSI:0,EIE:1,IEI:1,LIE:0,ILI:0,SEE:1,ESI:1,LSE:0,SLI:0,IEE:1,EII:1},checked: -1, skipped: false},
		{question: "Co robisz lepiej?", 
		choices: ["Lepiej idzie Ci z wymyślaniem planów i teorii.", 
		"Lepiej idzie Ci z realizowaniem planów i teorii."],
		score: {ILE:0,LII:0,ESE:1,SEI:1,SLE:1,LSI:1,EIE:0,IEI:0,LIE:0,ILI:0,SEE:1,ESI:1,LSE:1,SLI:1,IEE:0,EII:0},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystycznego dla Ciebie?", 
		choices: ["Szybko się namyślasz w zwykłych sytuacjach, gubisz się w niezwykłych.", 
		"Wątpisz w zwykłych sytuacjach, ale w niezwykłych szybko podejmujesz decyzję."],
		score: {ILE:1,LII:0,ESE:0,SEI:1,SLE:1,LSI:0,EIE:0,IEI:1,LIE:0,ILI:1,SEE:1,ESI:0,LSE:0,SLI:1,IEE:1,EII:0},checked: -1, skipped: false},
		{question: "Które wartości duchowe pasują do Ciebie bardziej?",
		choices: ["Umysł, entuzjazm i perspektywy.", 
		"Nowe możliwości i teorie, inspiracje, zabawy i komfort",
		"Przytulność i dobrobyt w domu, pokój na całym świecie, stabilność społeczna"],
		score: {ILE:1,LII:1,ESE:2,SEI:2,SLE:0,LSI:0,EIE:0,IEI:0,LIE:0,ILI:0,SEE:0,ESI:0,LSE:2,SLI:2,IEE:2,EII:2},checked: -1, skipped: false},
		{question: "Które z elementów poniżej najbardziej nie lubisz?",
		choices: ["Ram czasowych, ograniczeń moralnych i etycznych, granice kodeksów i przepisów.", 
		"Głośne hasła, ograniczenia działalności gospodarczej.",
		"Dyskomfort, ingerencja w wewnętrzne życie człowieka, idea 'odległej świetlanej przyszłości",
		"Mieszczaństwo, słabość, niepewność, nieodpowiedzialność."],
		score: {ILE:0,LII:0,ESE:2,SEI:2,SLE:0,LSI:0,EIE:2,IEI:2,LIE:1,ILI:1,SEE:3,ESI:3,LSE:1,SLI:2,IEE:3,EII:3},checked: -1, skipped: false},
		{question: "Które z marzeń poniżej najbardziej pragniesz?",
		choices: ["Być wielkim naukowcem, wymyślaniem niezwykłych rzeczy, komunikować się z osobami o podobnych poglądach.", 
		"Odnieść sukces jako przedsiębiorca, prowadzić wielką korporację, wprowadzenie do praktyki nowych technologii.",
		"Być liderem politycznym i duchowym, być szefem silnej partii lub ruchu.",
		"Mieć wszystkiego pod dostatkiem przez reszte swojego życia, żyć z rodziną w wielkim domu blisko natury."],
		score: {ILE:0,LII:0,ESE:3,SEI:3,/*SLE:0,LSI:1,EIE:1,IEI:0,*/LIE:1,ILI:1,SEE:2,ESI:2,LSE:1,SLI:3,IEE:3,EII:3},checked: -1, skipped: false},
		{question: "W jakiego rodzaju pracy myślisz, że odniesiesz największy sukces?",
		choices: ["Nauka, obszar o wysokiej technologii.", 
		"Komunikacja z ludźmi, rozwiązywanie codziennych problemów życiowych człowieka.",
		"Przemysł, działalność w zakresie zarządzania.",
		"Praca twórcza w dziedzinie humanitarnej."],
		score: {ILE:0,LII:0,ESE:1,SEI:1,SLE:2,LSI:2,EIE:3,IEI:3,LIE:0,ILI:0,SEE:1,ESI:1,LSE:2,SLI:2,IEE:3,EII:3},checked: -1, skipped: false},
		{question: "Które z elementów jest bardziej charakterystyczne dla Ciebie?",
		choices: ["Prostolinijność, pośpiech, dawanie wszystkiego co mam dla sprawy.", 
		"Elastyczność zachowania, spokojne zmiany, często zmieniasz sposób pracy.",
		"Trwałe opanowanie i kontrola emocji.",
		"Ucieczka od konfliktów, wrażliwość na nawet małe zmiany sytuacji, na zewnątrz spokojny."],
		score: {ILE:1,LII:1,ESE:0,SEI:3,SLE:2,LSI:2,EIE:0,IEI:3,LIE:0,ILI:2,SEE:0,ESI:2,LSE:0,SLI:2,IEE:1,EII:3},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystyczne dla Ciebie?",
		choices: ["Stanowczość, systematyczność, realizm, pragmatyzm i praktyczność.", 
		"Komunikatywny humor, nieformalne relacje, interakcje grupy.",
		"Szukanie ideałów i emocjonalnej harmonii, umiejętność dzielenia smutków drugiej osoby.",
		"Zainteresowanie do niezbadanego i niezwykłego, ciekawość, jesteś chętny do eksperymentowania."],
		score: {ILE:3,LII:3,ESE:1,SEI:1,SLE:0,LSI:0,EIE:2,IEI:2,LIE:1,ILI:1,SEE:1,ESI:1,LSE:0,SLI:0,IEE:2,EII:2},checked: -1, skipped: false},
		{question: "Jak komunikujesz się z płcią przeciwną na samym początku znajomości?",
		choices: ["Według zwykłego standardowego schematu, nie ma zbyt dużej inicjatywy z mojej strony.", 
		"Mam aktywną postawę w komunikacji, przejmuję inicjatywe, ale nie w dziedzinie uczuć.",
		"Komunikacja to emocjonalna wymiana, często podejmuję inicjatywe.",
		"Daję sygnały, że lubię daną osobę, staram się wspierać inicjatywe."],
		score: {ILE:0,LII:0,ESE:2,SEI:2,SLE:1,LSI:1,EIE:3,IEI:3,LIE:0,ILI:0,SEE:2,ESI:2,LSE:1,SLI:1,IEE:3,EII:3},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystycznego dla Ciebie?",
		choices: ["Jesteś zwolennikiem równości praw, rewolucjonisty.", 
		"Jesteś zwolennikiem jasnego przypisywania ról, szacunku dla ludzi wyżej w hierarchii, konserwatywny."],
		score: {ILE:0,LII:0,ESE:0,SEI:0,SLE:0,LSI:0,EIE:0,IEI:0,LIE:1,ILI:1,SEE:1,ESI:1,LSE:1,SLI:1,IEE:1,EII:1},checked: -1, skipped: false},
		{question: "Czy Twój nastrój zmienia się pod wpływem ludzi którzy Cie otaczają?",
		choices: ["Zywkle mój nastrój zmienia się pod wpływem innych ludzi.", 
		"Zywkle mój nastrój nie zmienia się pod wpływem innych ludzi."],
		score: {ILE:1,LII:1,ESE:0,SEI:0,SLE:1,LSI:1,EIE:0,IEI:0,LIE:1,ILI:1,SEE:0,ESI:0,LSE:1,SLI:1,IEE:0,EII:0},checked: -1, skipped: false},
		{question: "Jaki masz stosunek co do ustawienia rzeczy w Twoim domu?",
		choices: ["Próbuje dopasować stałe miejsce dla każdej rzeczy.", 
		"Porządek nie jest dla mnie niezbędny."],
		score: {ILE:1,LII:1,ESE:0,SEI:0,SLE:0,LSI:0,EIE:1,IEI:1,LIE:1,ILI:1,SEE:0,ESI:0,LSE:1,SLI:1,IEE:0,EII:0},checked: -1, skipped: false},
		{question: "Jaki masz stosunek do konfliktów z Twoimi przyjaciółmi, co jest dla Ciebie bardziej charakterystyne?",
		choices: ["Na spór patrzę przez pryzmat uczuć.", 
		"Spór analizuję w logiczny sposób."],
		score: {ILE:1,LII:1,ESE:0,SEI:0,SLE:1,LSI:1,EIE:0,IEI:0,LIE:1,ILI:1,SEE:0,ESI:0,LSE:1,SLI:1,IEE:0,EII:0},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystyczne dla Ciebie?",
		choices: ["Żyjesz \"tu i teraz\".", 
		"Żyjesz w przeszłości lub w przyszłości."],
		score: {ILE:1,LII:1,ESE:0,SEI:0,SLE:0,LSI:0,EIE:1,IEI:1,LIE:1,ILI:1,SEE:0,ESI:0,LSE:0,SLI:0,IEE:1,EII:1},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystyczne dla Ciebie kiedy jesteś na imprezie?",
		choices: ["Szybko się męczysz, preferujesz wcześniej skończyć i iść do domu.", 
		"Możesz bawić się do rana i nie czuć zmęczenia."],
		score: {ILE:1,LII:0,ESE:1,SEI:0,SLE:1,LSI:0,EIE:1,IEI:0,LIE:1,ILI:0,SEE:1,ESI:1,LSE:1,SLI:0,IEE:1,EII:0},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystyczne dla Ciebie?",
		choices: ["Z początku dostrzegam pozytywy, coś co \"jest\" np. szklanka do połowy pełna.", 
		"Z początku dostrzegam negatywy, braki czegoś np. szklanka do połowy pusta."],
		score: {ILE:0,LII:1,ESE:0,SEI:1,SLE:1,LSI:0,EIE:1,IEI:0,LIE:0,ILI:1,SEE:0,ESI:1,LSE:1,SLI:0,IEE:1,EII:0},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystyczne dla Ciebie?",
		choices: ["Dostrzegam proces w pracy, praca absorbuje mnie w całości, nie lubię zmian pomiędzy wykonywanymi pracami.",
		"Często wykonuję wiele rzeczy na raz, łatwo zmieniam się pomiędzy wykonywanymi czynnościami."],
		score: {ILE:1,LII:1,ESE:0,SEI:0,SLE:0,LSI:0,EIE:1,IEI:1,LIE:1,ILI:1,SEE:0,ESI:0,LSE:1,SLI:1,IEE:0,EII:0},checked: -1, skipped: false},
		{question: "Które zdanie z poniższych jest według Ciebie bardziej poprawne?",
		choices: ["Nie ma unikalnie poprawnych odpowiedzi, wszystko jest subiektywne.", 
		"Istnieje wiele sytuacji w których istnieje obiektywnie prawidłowa decyzja."],
		score: {ILE:0,LII:0,ESE:0,SEI:0,SLE:1,LSI:1,EIE:1,IEI:1,LIE:1,ILI:1,SEE:1,ESI:1,LSE:0,SLI:0,IEE:0,EII:0},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystyczne dla Ciebie?",
		choices: ["Twój normalny stan to bezczynność, mobilizujesz się w momencie rozpoczęcia pracy.", 
		"Jesteś zawsze w stanie mobilizacji, czasami trudno jest Ci się zre po skończonej pracy."],
		score: {ILE:0,LII:0,ESE:0,SEI:0,SLE:1,LSI:1,EIE:1,IEI:1,LIE:1,ILI:1,SEE:1,ESI:1,LSE:0,SLI:0,IEE:0,EII:0},checked: -1, skipped: false},
		{question: "Co jest bardziej charakterystyczne dla Ciebie?",
		choices: ["Zwykle stawiam sobie cele, które mogę osiągnąć w najbliższej przyszłości.", 
		"Zwykle ustalam wielkie cele, które mogę osiągnąć w dalekiej przyszłości."],
		score: {ILE:0,LII:1,ESE:1,SEI:0,SLE:1,LSI:0,EIE:0,IEI:1,LIE:0,ILI:1,SEE:1,ESI:0,LSE:1,SLI:0,IEE:0,EII:1},checked: -1, skipped: false},
		{question: "W jaki sposób zwykle działasz w zupełnie nowej sytaucji?",
		choices: ["Polegam na całym moim doświadczeniu, nawet jeśli nie jest ono do końca związane z tą konkretną sytuacją.", 
		"Używam informacji które są mi dane tylko w tej konkretnej sytuacji, nowe zadania są unikalne."],
		score: {ILE:1,LII:0,ESE:0,SEI:1,SLE:1,LSI:0,EIE:0,IEI:1,LIE:0,ILI:1,SEE:1,ESI:0,LSE:0,SLI:1,IEE:1,EII:0},checked: -1, skipped: false},
		{question: "Które z wymienionych są Twoją mocną stroną?",
		choices: ["Zmysłowość, zdolność do empatii, zdolność do udzielania porad w trudnych sytuacjach moralnych.", 
		"Towarzyskość, aktywność społeczna, zdolność, aby zapewnić komfort dla przyjaciół i rodziny.",
		"Wiedza, pomysłowość, zdolność do znalezienia odpowiedzi na wiele pytań.",
		"Niezawodność, funkcjonalność, zdolność do pracy przy wielu codziennych problemach."],
		score: {ILE:2,LII:2,ESE:1,SEI:1,SLE:3,LSI:3,EIE:0,IEI:0,LIE:2,ILI:2,SEE:1,ESI:1,LSE:3,SLI:3,IEE:0,EII:0},checked: -1, skipped: false},
	];
	var descriptions = {
ILE: "<h3>Intuicyjno-Logiczny-Ekstrawertyk ILE (ENTp)</h3><p>Postrzeganie świata (przez blok ego): świat jest pełny zagadek. Rozwiązując je można nauczyć się nowych rzeczy i wpaść na nowe pomysły.<p>Funkcje silne:</p>" +
"<p><img src='ne.png' alt='Ne'> Ne: ENTp interesuje tworzenie rzeczy nowych i niezwykłych, otwierających ciekawe perspektywy. Im większe perspektywy się otwierają (wg ENTp), tym bardziej te rzeczy go interesują. Obszar zainteresowań ENTp ciągle się zmienia."+
"Kiedy coś go zainteresuje, natychmiast zagłębia się w temat. Jednak jeżeli stwierdzi, że nie przyniesie to żadnych długoterminowych efektów - przestaje się tym zajmować." +
"Jest bardzo kreatywny. Ciągle poszukuje nowych sposobów realizacji swoich pomysłów.Jego najgorszym wrogiem jest któś, kto osłabi jego kreatywność przez np. nakaz rutynowej pracy. ENTp widzi potencjał w ludziach, którzy go otaczają." +
"Dlatego też stara się inspirować i zachęcać innych, aby je rozwijali - np. przez pokazywanie swoich nowych pomysłów. Nie boi się przekraczać istniejących norm i reguł. Zachowanie ENTp wydaje się czasem nieprzewidywalne albo chaotyczne." +
"Wynika to z tego, że nagle dostaje olśnienia i natychmiast zaczyna działać. Kiedy nie działa pod wpływem takiego olśnienia - to chętnie spędza czas z innymi biorąc czynny udział np. w imprezie.</p>" +
"<p><img src='ti.png' alt='Ti'> Ti: logika jest mocną stroną tego typu. Kiedy rozwiązuje problem, stara się go maksymalnie uogólnić na inne przypadki. Najpierw znajduje istotę problemu. Potem stara się przewidzieć wszystkie konsekwencje. Opis logiczny rozwiązania jest"+
"dla niego wtedy oczywisty. W pracy lubi wykonywać strategiczne zadania, nie lubi detali. Problemem dla niego jest skoncentrowanie się tylko na jednym zadaniu. Aby się tak skoncentrować musi być bardzo zainteresowany problemem. Jednak jeżeli"+
"już dokładnie się czymś zajmie, jest w staniu wywnioskować rzeczy, które innym nie przyjdą do głowy."+
"Kiedy ma do rozwiązania jakiś problem, a jest skoncentrowany tylko na jednym jego aspekcie - może mieć niewłaściwy ogląd na problem i przegrać w rywalizacji z innymi. Nie frustruje go to jednak i może szybko"+
"się zająć czymś nowym."+
"Zazwyczaj nie planuje rzeczy naprzód, jednak w sytuacjach kryzysowych potrafi skoncentrować się i wymyślić dobry plan. Nie ulega w takiej sytuacji panice. Inspiruje innych swoim entuzjazem, czasami jednak składa obietnice bez pokrycia. Wynika"+
"to z tego, że może przeceniać wartość swoich pomysłów."+
"Ciężko mu się przystosować do sztywnych reguł, w szczególności w pracy. Może to powodować konflikty z przełożonymi. Jednak kiedy znajdzie pracę, w której może być kreatywny, pracuje bardzo ciężko. Praca taka daje mu dużą satysfakcję. Może"+
"również pracować fizycznie, jeżeli uzna to w jakiś sposób inspirującym."+
"Czasami perspektywa nauczenia się czegoś nowego może być dla niego ważniejsza niż rezultat pracy.</p>" +
"<p>Funkcje słabe:</p>"+
"<p><img src='fi.png' alt='Fi'> Fi: ENTp reaguje nerwowo na sprawy dotyczące uczuć. Swoje relacje z innymi często postrzega nieprawidłowo. Dlatego relacje takie traktuje ostrożnie. Pozwala się im rozwijać i czeka na 100% pewność co do intencji drugiej osoby."+
"Zachowuje rezerwę wobec ludzi, których nie zna. Ponieważ czasem nie potrafi rozpoznać zamiarów innych, może ich obrazić w sposób wyglądający na taki, jakby w ogóle nie brał pod uwagę ich uczuć. Jednak nie wynika to ze złych zamiarów,"+
"zazdrości czy arogancji. Po prostu uważa, że mówi obiektywnie, a prawda nikogo nie może obrazić."+
"Dla ENTp ważne jest przestrzeganie ustalonych norm zachowania, np. wzajemny szacunek w kontaktach koleżeńskich. Cierpi, jeżeli jest obrażany lub niesprawiedliwie oceniany. Nie pogodzi się z innymi, jeżeli nie zostanie przeproszony.</p>"+
"<p><img src='se.png' alt='Se'> Se: ENTp nie lubi naciskać na innych. Kiedy jednak ktoś próbuje go wykorzystać do swoich celów lub do zrobienia czegoś, stawia opór - pokazując swoje zniecierpliwienie. Co do rzeczy związanych za zdrowiem, domem - potrzebuje pomocy "+
"kogoś innego. Rzadko porządkuje coś z własnej inicjatywy. Działa, jeżeli coś mu bardzo przeszkadza."+
"Organizacja finansów ENTp może pozostawiać wiele do życzenia, np. wydaje wszystko co ma. Jednak jego inicjatywa i kreatywność pozwalają naprawić finanse.</p><p>W domu i w pracy:</p>"+
"Jako szef ENTp jest dobry w planowaniu i strategii, widzi np. co w dalszej perspektywie może stać się z projektem."+
"Próbuje zafascynować podwładnych wykonywanym zadaniem. Jednocześnie stara się pozyskać stronników w grupie. Nie zmusza pracowników do przestrzegania ścisłych reguł. Rozeznaje się natomiast w ich umiejętnościach i odpowiednio rozdziela podzadania."+
 "Staje się niecierpliwy jeżeli pracownik nie zmieści się w wyznaczonych limitach czasowych(?)."+
"Potrafi być wytrwały w wykonywanej pracy. Umie też poradzić sobie ze współpracownikiem, który źle wykonuje swoją pracę. Nie jest wtedy arogancki albo egotyczny."+
"ENTp jest towarzyski, jednak nie zawsze udaje mu się stworzyć rodzinę. Nie rozumie sensu uczucia miłości. Wydaje mu się że jest to coś czego nie może kontrolować. Może nie być przez partnera odrzucony, a jednak nie poświęca się w pełni rodzinie (nawet kobieta tego typu)."+
"Chociaż czuje potrzebę kontaktów z innymi jego słabością jest nieumiejętność wykazania się tu inicjatywą.</p>"+
"<p>Podsumowanie funkcji:</p><p>1.<img src='ne.png' alt='Ne'> Ne: Interesują go nowe pomysły, które dają ciekawe możliwości. Informacje bierze z każdego źródła. Umie przewidzieć konsekwencje rzeczy. Potrafi prezentować swoje poglądy. Ma dużo fantazji.</p>"+
"<p>2.<img src='ti.png' alt='Ti'> Ti: Jest zdolny tworzyć całkowicie nowe teorie jako syntezy istniejących. Inicjuje nowe kierunki w nauce. Potrafi pracować dokładnie i prawidłowo nad rzeczami które go interesują.</p>"+
"<p>3.<img src='fi.png' alt='Fi'> Fi: Wyznacza dla siebie i innych wysokie standardy etyczne i je egzekwuje. Szybko zniechęca się do kogoś, kto ich nie przestrzega. Może czasami kogoś niesłusznie oskarżyć.</p>"+
"<p>4.<img src='se.png' alt='Se'> Se: Nie próbuje czegoś osiągnąć siłą i nie poddaje się naciskowi innych. Nie przejmuje się rzeczami związanymi ze ze zdrowiem i domem. Czasami źle zarządza finansami, ale potrafi zdobyć pieniądze, kiedy potrzeba.</p>"+
"<p>Kariera zawodowa:</p>"+
"<p>Najlepiej realizuje się w nauce, w badaniach. Jak żaden inny typ potrafi połączyć różne dziedziny, pozornie odległe i wyznaczyć nowy kierunek badań. Może odnieść także sukces w biznesie np. w działalności wydawniczej.</p>"+
"<p>Relacje:</p><p>Potencjalnie korzystne:</p><p>SEI (ISFp), SLI (ISTp), IEI (INFp), ESE (ESFj)</p><p>Potencjalnie niekorzystne:</p><p>ESI (ISFj), EII (INFj), LSI (ISTj), ILI (INTp)</p>",
LII:"<h3>Logiczno-Intuicyjny-Introwertyk LII (INTj)</h3><p>Instalacja świadomości głównego bloku: Rzeczywistość jest zdefiniowana poprzez jej zgodność z prawami, które to muszą być odkryte przez analityka. Przez to jest możliwe by głębiej badać istotę różnych zjawisk i procesów.</p><p>Opis silnych funkcji:</p>"+
"<p><img src='img/ti.png' alt='Ti'> Ti: Ideologia analityka jest oparta na wzajemnej zależności pomiędzy różnymi zjawiskami a otaczającym je świecie; wszystko co ma miejsce jest podporządkowane określonym prawom i strukturom."+
"Jego myślenie przybiera analityczną naturę. On najpierw zbiera wiedze i badając ją analizuje fakty. On rozumie istotę zjawisk poprzez stworzenie modelu dla wiedzy w swojej świadomości zgodnego z jego doświadczeniem. On jest prowadzony przez uniwersalne pomysły które wymyślił i zrozumiał bez względu na opozycje innych. W żadnym razie on nie będzie odciągany od tego co uważa za główny cel w jego życiu i będzie porzucać tylko coś co kiedyś zaczął jeśli przekonany jest, że jest to błędne. Jego praca często stanowi główny punkt w jej egzystencji."+
"Analityk uwielbia precyzje i porządek we wszystkim. Jest on skrupulatny i drobiazgowy. Znajduje przyjemność w systematyzowaniu, w organizowaniu wszystkiego „na półce”. Wszystko jest wykonywane według planu. Uważa, że zachowanie ludzi, a przede wszystkim w pracy, musi być podporządkowane logicznemu i określonemu systemowi. Natychmiast zauważa nielogiczność i sprzeczności prezentowane w działaniach ludzi i jak to tylko możliwe dokonuje próby wprowadzenia poprawek. Zależnie od tego z kim ma do czynienia może wyrażać krytykę lub proponować pomoc. Generalnie irytują go chaotyczni, niedbali i nierozważni ludzie."+
"<p><img src='img/ne.png' alt='Ne'> Ne: Po to, żeby zbudować przekonujący system zgodny z prawami logiki, analityk stara się zagłębiać w istotę przedmiotów i wydarzeń, odszukuje zasadniczych powodów ich występowania. Nie może żyć bez zasadniczego kompletu rzeczy w które wierzy. Jeśli koniecznie musi którąś z tych rzeczy porzucić (a zdarza się to niezwykle rzadko) to po prostu sformułuje następne w zamian za to porzucone. W tego typu sprawach bardzo ważne jest by być przekonanym co do poprawności tych wartości, które stanowią jej zainteresowanie. Jej ideologia musi mieć stałe wewnętrzne poparcie."+
"On jest ciągnięty do przodu przez intuicyjne wgłębianie się uniwersalne sprawy, ale kiedy jest usatysfakcjonowany zrozumieniem jednej sprawy to ciągnie go do następnej. To co już całkowicie rozumie wydaje się bardzo jasne i nieinteresujące. On może być zadowolony z wyniku który uzyskał tylko przez krótki okres czasu, gdyż wkrótce pojawia się poczucie trywialności dla tego czego dokonał."+
"Jedna z największych pozytywnych wartości analityka leży w umiejętności w rozwikłaniu najbardziej zawiłych i skomplikowanych zagadnień, tak żeby móc skoncentrować się na tych najbardziej ważnych punktach i widzieć problem „z góry” i jasno przedstawić jego zrozumienie. Jeśli analityk zrozumie istotę problemu wystarczająco dobrze to nie będzie ulegał opiniom tych co się z nim nie zgadzają, będzie on zawsze obwieszczał swoją pozycje."+
"Bardzo charakterystyczną cechą analityka jest zdolność do wyczucia czasu. Nie może go naturalnie zmarnować na próżno. On pracuje spokojnie, z daleka wydaje się bez pośpiechu. Jego zdolność do koncentracji i do tego, że nie daje się rozpraszać przez zewnętrzną ingerencje gwarantuje jego sprawność w pracy. Na ogół analityk jest zdolny do określenia kiedy praca jest zrobiona. Jego precyzja ujawnia się w jego własnych zobowiązaniach. Jeśli analityk zgodził się by być na spotkaniu, ale nigdy się nie pojawił to znaczy, że coś poważnego musiało się mu przytrafić.</p>"+
"<p>Opis słabych funkcji:</p><p><img src='img/se.png' alt='Se'>Se: Analityk słabo przenosi zależną od woli presje na kogoś, chociaż może znaleźć się na kierowniczym stanowisku z którego rozkazy są wydawane. On nie będzie wykonywał poleceń przełożonych z takiego powodu iż uważa, że jest to niewłaściwe."+
"W godzeniu się z innymi analityk będzie raczej stawiał reguły niż zaczynał z niesprawiedliwością. On może czasem wyrażać ostrość i zapał co innych zaskakuje."+
"Analitykowi bardzo ciężko jest się wpisać w ścisłe ramy hierarchicznej struktury gdzie wszystko jest wcześniej określone i nie ma w tym miejsca dla kreatywności."+
"Analityk zachowuje racjonalność w materialnych wydatkach. Często odkłada on jakąś sumę pieniędzy w przypadku jakiejś nieprzewidzianej sytuacji. Nie będzie wydawał pieniędzy w próżny sposób, jest oszczędny."+
"Jego idealne szczęście zawiera się w uregulowanym i poprawnym życiu, gdzie praca i zabawa są od siebie odseparowane. Analityk może przez bardzo długi czas, a czasem nawet i przez całe życie trzymać się takiej samej codziennej rutyny. Gdy okoliczności naruszają jego rutynę czuje się nieswojo i w tego typu sytuacjach koncentruje całe swoje zasoby energii aby przywrócić porządek, gdyż to właśnie w rutynie potrafi on odnaleźć swojego rodzaju wewnętrzne wsparcie. Zamieszanie i chaos, czy to w jego prywatnym życiu, czy też w pracy boleśnie się na nim odbijają."+
"Pod względem zdrowia analityk opowiada się za obiektywną rzeczywistością, ale nie powierza sobie ze względu na swoje własne odczucia tylko całkowicie polega na lekarzach. Kiedy zachoruje natychmiast stosuje się do zaleceń swojego lekarza wykupując przepisane leki i wyznaczając odpowiednie dawki."+
"Ze względu na odzież analityk często obstaje przy „biznesowym” stylu podkreślając bardziej swoją pozycje zawodową aniżeli swoje specyficzne cechy. Nie interesują go pretensjonalne i jasne dodatki. Ogranicza się w ukazywaniu swojej seksualnej atrakcyjności.</p>"+
"<p><img src='img/fi.png' alt='Fi'> Fi: Dziedzina etyki zdradza słabość analityka. W tej sferze stosuje się do ogólnie przyjętych norm i tradycji społeczeństwa. Może rozwijać dostateczną uwagę i powściągliwość tak aby unikać takich sytuacji, w których to czuje się źle zorientowanym. Analityk bardzo słabo radzi sobie z wyczuwaniem emocjonalnej atmosfery, preferuje nie wtrącać się w konflikty i jak to tylko jest możliwe stara się unikać takich sytuacji. Z trudem przychodzi mu pocieszanie innych. W tego typu kwestiach preferuje konkretną pomoc albo, jeśli to jest niemożliwe stara się po prostu odejść i nie mieszać się. Nie rozumie co powinien zrobić, albo co powinien powiedzieć kiedy staje twarzą w twarz z kimś kto ma niekontrolowany wybuch pełnych smutku emocji."+
"Ma tendencję aby utrzymywać daleki dystans psychologiczny. Nie pokazuje zażyłości z innymi i z tego powodu jako dziecko i także jako dorosły w bardzo wielu przypadkach ma problem by rozwijać i utrzymywać relacje z innymi. W ten sposób ukazuje się słabość etycznej funkcji."+
"Analityk podąża za tradycją. Jest poprawny i ćwiczy powściągliwość. Nie ulega pokusie, by zachowywać się w sposób jaki uważa za żałosny, ale to nie jest jego prawdziwa natura. Pod poważną maską często kryje się skryte życie duchowe na które wpływa wiele doświadczeń. Jednakże, jego powściągliwa natura nie pozwala mu by dzielić się swoimi niepowodzeniami z innymi. Czasem nawet latami może nosić w sobie obrazę tylko z wielką trudnością upomina obrażającego."+
"Analityk rozwija relacje z wielką uwagą, zachowując się w kierunku innych z powściągliwością i szacunkiem. Zauważalnie z jego strony pojawia się zainteresowanie podczas intelektualnej rozmowy, gdyż w tej sferze czuje się wystarczająco pewnie.",
ESE: "<h3>Etyczno-Sensoryczny-Ekstrawertyk ESE (ESFj)</h3>",
SEI: "<h3>Sensoryczno-Etyczny-Introwertyk SEI (ISFp)</h3><p>Umiejscowienie świadomości w bloku wiodącym SEI: jego życie wyznacza harmonia, komfort i możliwość odczuwania przyjemności. Koniecznym jest ukazywanie ich innym, ze względu na czerpanie radości z uszczęśliwiania ludzi.</p>"+
"<p>Opis silnych funkcji:</p><p><img src='img/si.png' alt='Si'> Si: Dla SEI funkcja ta, skupiona jest głównie na zdrowiu w najszerszym tego słowa znaczeniu. W to pojecie wliczają się odczucia jego ciała, stan zdrowia lub choroby. Jest również zatroskany, jakością jedzenia i jego przygotowaniem, odczuwaniem komfortu w swoim środowisku (wliczając miejsce pracy), oraz ubraniem (jego wartością estetyczna i wygodą). SEI dobrze pojmuje charakterystykę organizmu, jego potrzeby. Lekarze, pomimo posiadania autorytetu, którego ISFp brakuje, nie będą w stanie przemówić mu do rozsądku, gdy wydadzą diagnozę kolidującą z jego wewnętrznymi, wrodzonymi odczuciami. Generalnie, uznaje on chorobę, jako cos niemalże niestosownego: „To nierozsądne głupstwo, nie dbać o siebie!„"+
"Pojmuje zmysły tak dobrze, że jest zdolny do dostrzegania ledwo widocznych objaw, których inni nie są świadomi. Jednak, w tych przypadkach, nie uznaje za odpowiednie by mieszać się w sprawy innej osoby, z zamiarem zaoferowania swoich rad, czy wskazówek. W polu zdrowotnym musi ona sama powziąć za siebie odpowiedzialność."+
"SEI wie jak smacznie przyrządzić potrawy. Doskonały znawca kulinarny, często tworzy cos nowego i oryginalnego. Dekoruje również swoje otoczenie, by uczynić je estetycznie atrakcyjnym – w ten sposób, zarówno jego oczy i żołądek mogą wybrać sie na zasłużone wakacje."+
"SEI podchodzi do swojego środowiska z bardzo sensorycznego wymiaru. Podczas wyposażania pokoju, koncentruje sie na przytulności, wygodzie, odpowiednim dobraniu mebli, odcieniach koloru – wszystko to jest ważne i w ten sposób staje sie obiektem troski i zainteresowania."+
"SEI pragnie harmonii w stosunku do ubioru, ale zdaje sobie sprawę, że materiały powinny być wygodne, funkcjonalnie uzasadnione i miłe dla oka. Jednakże nie będzie sie ubierał w krzykliwy sposób na specjalne okazje; czuje się wtedy niekomfortowo – „Wygoda przede wszystkim!”"+
"<p><img src='img/fe.png' alt='Fe'> Fe: SEI jest epikurejczykiem zarówno w sferze fizycznej jak i emocjonalnej. Jego uczuciowość rozwijana jest pod każdym względem. Lubi zgłębiać dziedziny sztuki, zwłaszcza muzykę i śpiew. Często gra na jakimś instrumencie, bądź śpiewa dla rozrywki. Jest dobrym pisarzem, "+
"poetą i artystą. Artysta także w miłości, uwielbia przygody w tej sferze. Wie jak dbać o drugą osobę, zapewnić jej emocjonalną i zmysłową przyjemność. Zależnie od okoliczności SEI może używać tych umiejętności, aby skupić na sobie uwagę."+
"Kiedy staje się oczywiste, ze jego związek się kończy, SEI robi krok naprzód, podejmuje ostatnia rozmowę i ma nadzieje, że reszta posypie sie w gruzy bez jego udziału. Następnie, natychmiast próbuje poznać kogoś nowego; poprzedzając ostateczne zerwanie z poprzednim partnerem."+
"Zazwyczaj SEI za wszelka cenę stara się unikać napięć. Jeśli wybucha konflikt pomiędzy innymi, usiłuje "+
"grac role pośrednika obu stron, aby rozdzielić je tak szybko jak to możliwe. W razie kłótni, która bezpośrednio dotyczy jego samego, będzie traktował siebie, jako “podwładnego” i często zgadzał z rozmówca. Źle znosi agresje fizyczna. W takich sytuacjach jest zdolny do samoobrony,"+
" ale po fakcie czuje wyrzuty sumienia i potrzebę wyczerpującej rozmowy o tym, co zaszło. Zazwyczaj jego taktyka to wycofanie sie z obszaru stresu, by potem powrócić na to, psychologicznie mu odpowiadające, powrócić do komfortu zmysłowego."+
"Kiedy zostaje niespodziewanie atakowany, raczej natychmiastowo odpowiada w sposób racjonalny, niż dumny i wywyższający się. Ten sposób działania pozwala mu na opuszczenie sytuacji konfliktowej z poniesieniem minimalnych strat."+
"Jego tendencja do zapewniania przyjemności sobie i swoim bliskim, często stawia go w roli duszy towarzystwa. Lecz, jeśli grupa nie odpowiada mu tym samym, zwykle znajdzie innych ludzi, których uzna za bardziej sympatycznych. Otwarty komfort fizyczny to jego główny motyw. Kiedy zmuszony "+
"jest doświadczać długich okresów czasu bez tego uczucia, popada w depresję i wszystko wymyka się spod jego kontroli."+
"<p>Opis słabych funkcji:</p><p><img src='img/te.png' alt='Te'> Te: Logika biznesowa to pięta Achillesowa SEI. Ta słabość daje wyraz w jego niemożności by działać produktywnie, racjonalnie. Aby pracował wydajnie, środowisko pracy musi posiadać dobre, komfortowe warunki."+
"Słabo radzi sobie w ciężkiej, niewygodnej pracy. W takim wypadku poszukuje szansy by jej uniknąć, zająć się czymś bardziej interesującym i przyjemnym. Czasem po ustaleniu terminu spotkania może o nim zapomnieć i tym samym nie wywiązać sie z obietnicy. Gdy to nastąpi będzie starał się ze wszystkich swoich sił, uniknąć konsekwencji."+
"Zorientowany w sferze doznań zmysłowych, nie znosi, gdy inni zmuszają go do zrobienia czegoś, co uznaje za nieprzyjemne. Taką sytuację postrzega w szczególnie bolesny sposób, gdy zmuszony jest poradzić sobie z irracjonalnością działań biznesowych. Nie posiada żadnych aspiracji by pozyskać społeczny prestiż – bardziej odpowiada mu skupianie sie na prostej, codziennej radości i dobrych relacjach z ludźmi."+
"<p><img src='img/ni.png' alt='Ni'> Ni: Słabość tej funkcji jest wyjątkowo rozwinięta i może być zaobserwowana w fakcie, że SEI trudno jest rozplanować swój czas i wykonać pracę w danym terminie. Musi sie zmusić by tego dokonać. Zwykle unika określonych i ostatecznych terminów, w odniesieniu do pracy, tyczy się to możliwości uniknięcia odpowiedzialności, jeśli to konieczne."+
"Nie zawsze zdolny by sprawnie oszacować i tym samym przystosować sie do sytuacji. Często zdarza sie, ze popełnia bledy w ocenie ludzi, zbytnio ich idealizując.Bardzo pogodny, żyje chwilą, sprawia wrażenie osoby niemającej problemów w przyszłości.</p><p>SEI w pracy i w domu:</p>"+
"<p>SEI zazwyczaj polega na osobistych relacjach, aby osiągnąć to, czego pragnie. Stara sie, na tyle na ile to możliwe, unikać autorytetów. Doskonale wie jak dopasować odpowiedni psychologiczny dystans z ludźmi, z którymi ma styczność. To sprawia, ze w sferze biznesu, używa swoich silnych funkcji, będąc rozmówca – pośrednikiem."+
"Mimo ze SEI nie lubi podejmowania sie mozolnych wysiłków w pracy, jeśli znajdzie odpowiednią, potrafi się wykonywać ją z wielkim oddaniem. Lecz, jeśli uzna dane zajecie za niekorzystne, nigdy nie będzie zmierzał do ukończenia go. Szukając alternatywnych, by wykonać je własnymi metodami."+
"SEI jest bardzo przywiązany do rodziny. Tu, w najlepszy sposób, rozwijane jest jego znaczenie komfortu, umiejętności rozstrzygania sporów, dobre rozumienie stanu zdrowia członków rodziny, pomaganie im, stwarzanie udogodnień i przyjemności. W obronie swoich najbliższych, zdolny jest do przekroczenia granicy swoich przekonań, może nawet stać się agresywny."+
"SEI chętnie zajmuje sie pracami domowymi, takimi jak gotowanie i urządzanie mieszkania. W tych dziedzinach ma wykształcony zmysł ekonomiczny. Jest oszczędny, wiec co zjeść, co kupić. Co więcej jego oszczędność nie odnosi sie do bliskich i przyjaciół, którzy widza go szczerego w swojej szczodrości."+
"SEI z wielkim oddaniem zwraca uwagę na rozwój dzieci. Podejmuje sie kształcenia ich, nie mając jednocześnie żadnych wątpliwości, ze wiedza może być jedną z największych przyjemności w życiu. Jednakże, ciężko mu trzymać się norm moralnych pod względem dyscypliny. Jako epikurejczyk, nie przegapi możliwości spędzenia czasu z innymi. Szczególnie skoncentrowany na byciu zadowolonym i dostatecznie szczęśliwym."+
"<p>Podsumowanie funkcji:</p><p>1. <img src='img/si.png' alt='Si'>	Si: Głównym motywem jego życia jest przyjemność. Wie jak uczynić otoczenie przytulnym i wygodnym. Rozumie potrzeby swojego ciała; epikurejczyk i esteta. Unika władzy i wywierania na nim presji.</p>"+
"<p>2. <img src='img/fe.png' alt='Fe'>	Fe: Odnosi sie do zasady unikania negatywnych emocji za wszelka cenę i dążenia tylko do tych przyjemnych. Łagodnie, bez zahamowań, potrafi formować bliski kontakt psychologiczny. Doskonale radzi sobie w roli rozjemcy, łagodzącego spor miedzy dwoma stronami."+
"<p>3. <img src='img/te.png' alt='Te'>	Te: Efektywna, trzymająca sie wyznaczonych celów praca - to nie w jego stylu. Kierowany entuzjazmem częściej niż uporządkowanym charakterem. Trudno mu włączyć sie w jakikolwiek zorganizowany system, w takich chwilach działa spontanicznie.</p>"+
"<p>4. <img src='img/ni.png' alt='Ni'>	Ni: Nie interesuje go, co stanie sie w odległej przyszłości; głownie skoncentrowany na byciu “tu I teraz”. SEI nie potrafi dobrze, wyobrazic sobie ukrytych możliwości ludzi i sytuacji; jego uwaga jest skupiona na widocznych konkretach.</p>"+
"<p>Preferencje zawodowe:</p><p>Najodpowiedniejsze zajęcie dla siebie SEI może znaleźć w dziedzinie usług. Pośród reprezentantów tego typu, można spotkać wielu znamienitych artystów i muzyków; mogą również odnieść duży sukces w medycynie i szkolnictwie. Swój potencjał realizują także w dekorowaniu wnętrz, modzie i kuchni.</p>",
SLE: "<h3>Sensoryczno-Logiczny-Ekstrawertyk SLE (ESTp)</h3><p>Cz&#281;sto to solidnie, mocno zbudowani ludzie, spotyka si&#281; te&#380; bardzo eleganckie, wytwornie wygl&#261;daj&#261;ce kobiety - jednak na podstawie ich wolicjonalnych cech zewn&#281;trznych mo&#380;na pewnie okre&#347;li&#263; ten psychotyp.</p>"+
"<p>Podczas rozmowy, zanim SLE odpowie, na moment si&#281; koncentruje w celu u&#347;wiadomienia sobie informacji i udzielenia potrzebnej odpowiedzi. Ubiera si&#281; przeci&#281;tnie, jednak spotyka si&#281; te&#380; amator&oacute;w &quot;awangardy&quot; (cz&#281;sto w&#347;r&oacute;d kobiet).</p>"+
"<p><img src='img/se.png' alt='Se'> Se: Cz&#322;owiek skupiony, wolicjonalny, ukierunkowany. Jego zainteresowania zazwyczaj zwi&#261;zane s&#261; z praktyczn&#261; dzia&#322;alno&#347;ci&#261;. Cz&#281;sto wyst&#281;puje w roli przyw&oacute;dcy, przy czym swoje obowi&#261;zki mo&#380;e wykonywa&#263; spokojnie, metodycznie, bez krz&#261;taniny i nerwowo&#347;ci. Je&#347;li sprzeciwiaj&#261; mu si&#281; w sprawach zawodowych, z pe&#322;nym przekonaniem w swoj&#261; s&#322;uszno&#347;&#263; przytacza ci&#281;&#380;kie argumenty. Stara si&#281; utrzymywa&#263; rzeczowy, wa&#380;ki ton. Jego maniera m&oacute;wienia nie zamienia si&#281; w zale&#380;no&#347;ci od liczby s&#322;uchaczy - m&oacute;wi rze&#347;ko i optymistycznie, prawie zawsze na jednym stopniu g&#322;o&#347;no&#347;ci. Dobrze orientuje si&#281; w s&#322;u&#380;bowych zaletach swoich wsp&oacute;&#322;pracownik&oacute;w i umie wszystkich rozstawi&#263; na stanowiskach w taki spos&oacute;b, &#380;eby ka&#380;dy czu&#322; si&#281; na w&#322;a&#347;ciwym miejscu i pracowa&#322; z maksymalnym oddaniem.</p>"+
"<p>Je&#347;li ktokolwiek z jego otoczenia uporczywie robi co&#347;, co on uwa&#380;a za niepotrzebne, mo&#380;e wykaza&#263; twardo&#347;&#263; i nieprzejednanie, nawet w drobiazgach. Oto charakterystyczny epizod: &quot;Bardzo chcia&#322;am postawi&#263; na stole pierogi z kapust&#261;, ale moja c&oacute;rka T. sama przygotowa&#322;a, wed&#322;ug swojego pomys&#322;u wszystkie pocz&#281;stunki i kategorycznie zabroni&#322;a mi &laquo;wje&#380;d&#380;a&#263; ze swoimi pierogami&raquo;. Kiedy zauwa&#380;y&#322;a, &#380;e z&#322;ama&#322;am jej zakaz, twardo i ch&#322;odno o&#347;wiadczy&#322;a: &laquo;Je&#347;li natychmiast nie przestaniesz, wyprowadz&#281; si&#281; z domu&raquo;. Obecni go&#347;cie starali si&#281; zmi&#281;kczy&#263; niezr&#281;czno&#347;&#263; dowcipami, ale T. nie ust&#281;powa&#322;a i musia&#322;am si&#281; podporz&#261;dkowa&#263;&quot;. (W tej rodzinie c&oacute;rka SLE i matka SEE nie jest udanym po&#322;&#261;czeniem). W podobnych i bardziej powa&#380;nych sytuacjach u SLE pojawia si&#281; &quot;&#380;elazo&quot; w g&#322;osie i stylu zachowania.</p>"+
"<p>Je&#347;li SLE postawi przed sob&#261; powa&#380;ny cel, przejawia niepohamowan&#261; energi&#281;, stanowczo&#347;&#263;, ukierunkowanie i bezwzgl&#281;dnie dopnie swego, przy czym mo&#380;e jeszcze d&#322;ugi czas znajdowa&#263; si&#281; w stanie wewn&#281;trznej mobilizacji.</p>"+
"<p><img src='ti.png' alt='Ti'> Ti: Dzia&#322;a na podstawie logicznej analizy obiektywnej sytuacji. B&#281;d&#261;c przyw&oacute;dc&#261;/kierownikiem planuje przedsi&#281;wzi&#281;cia i informuje wszystkich o nadchodz&#261;cej sprawie zawczasu wszystko przemy&#347;lawszy. Natychmiast rozdziela obowi&#261;zki, proponuje przyj&#261;&#263; rozwi&#261;zanie, potem g&#322;osowanie, opracowanie... zdolny jest wci&#261;gn&#261;&#263; do pracy ca&#322;y zesp&oacute;&#322; obja&#347;niaj&#261;c mu cele i precyzuj&#261;c stoj&#261;ce przed nim zadania. W procesie pracy kontroluje jej post&#281;p, wtr&#261;ca si&#281; w przypadku gdy uzna, &#380;e to niezb&#281;dne.</p>"+
"<p>&#321;atwo mo&#380;e zaprowadzi&#263; i utrzymywa&#263; porz&#261;dek w dzieci&#281;cej grupie: &quot;L. pojecha&#322;a do internatu, uczy&#322;a si&#281; doskonale, ale te&#380; z &#322;atwo&#347;ci&#261; przychodzi&#322;a jej &laquo;praktyka&raquo; - znajdowa&#322;a spos&oacute;b na najbardziej z&#322;o&#347;liwe dzieci, zachowuj&#261;c przy tym demokratyczny styl zachowania i unikaj&#261;c represji&quot;.</p>"+
"<p>Jeszcze lepiej SLE przejawia swoje zalety b&#281;d&#261;c przyw&oacute;dc&#261; w hierarchicznym systemie, w kt&oacute;rym ka&#380;dy z jego cz&#322;onk&oacute;w ma okre&#347;lony status. Poza takim systemem stara si&#281; nie bra&#263; na siebie odpowiedzialno&#347;ci.</p>"+
"<p>Podczas omawiania spraw s&#322;u&#380;bowych ch&#281;tnie wys&#322;ucha zdania wszystkich zaanga&#380;owanych stron, ale ostateczn&#261; decyzj&#281; podejmie sam, je&#347;li jest kierownikiem.</p>"+
"<p><img src='img/fi.png' alt='Fi'> Fi: Pow&#347;ci&#261;gliwy w wyra&#380;aniu emocji ( <img src='fe.png' alt='Fe'>). Stara si&#281; &quot;spa&#347;&#263; z nieba na ziemi&#281;&quot; obok swoich entuzjastycznych i &#380;ywio&#322;owych towarzyszy, sk&#322;onnych do nierealnych marze&#324;: &quot;Nie podniecaj si&#281; tak, to trzeba jeszcze przemy&#347;le&#263;, obliczy&#263;, &#380;eby&#347; potem nie by&#322; rozczarowany&quot;.</p>"+
"<p>W trudnych sytuacjach mo&#380;e okaza&#263; si&#281; jedynym pewnym koleg&#261; i pomocnikiem - zdob&#281;dzie bilet na samolot, znajdzie bardzo potrzebn&#261;, ale rzadk&#261; ksi&#261;&#380;k&#281;, um&oacute;wi na konsultacje z dobrym lekarzem, pomo&#380;e przygotowa&#263; pocz&#281;stunek, je&#347;li wpadn&#261; niespodziewani go&#347;cie. Bez zb&#281;dnych s&#322;&oacute;w zrobi wszystko, co konieczne - w tragicznej sytuacji zaproponuje pomoc w zorganizowaniu najci&#281;&#380;szych spraw. Nie okazuj&#261;c najmniejszych emocji, zdolny jest pom&oacute;c s&#322;u&#380;bowo, nawet je&#347;li czyja&#347; potrzeba nie dotyczy bezpo&#347;rednio jego pracy.</p>"+
"<p>Przychodz&#261;c w go&#347;ci stara si&#281; przynie&#347;&#263; jaki&#347; prezent, zw&#322;aszcza je&#347;li w domu s&#261; dzieci - ksi&#261;&#380;k&#281;, zabawk&#281;, s&#322;odycze. O swoich przykro&#347;ciach woli nie m&oacute;wi&#263;, stara si&#281; nie uskar&#380;a&#263;, chocia&#380; mo&#380;e mimochodem rzuci&#263; co&#347; ironiczne z na okoliczno&#347;&#263; swojego nieudanego &#380;ycia. Tym niemniej miewa &#380;al, je&#347;li domownicy nie interesuj&#261; si&#281; jego nastrojem - nie rozumie, &#380;e niezale&#380;ny styl jego zachowania nie zach&#281;ca jego bliskich do tego rodzaju wsp&oacute;&#322;czucia: &quot;Przychodz&#281; do domu zmordowana jak pies, a on (m&#261;&#380;) m&oacute;g&#322;by chocia&#380; zainteresowa&#263; si&#281; moimi sprawami!&quot;.</p>"+
"<p>Romantyka mi&#322;osnych relacji dla SLE jest ma&#322;o zrozumia&#322;a. Nie wie o czym wtedy m&oacute;wi&#263;, boi si&#281; okaza&#263; &quot;s&#322;abo&#347;&#263;&quot; - odnosi si&#281; to r&oacute;wnie&#380; do kobiet.</p>",
LSI: "<h3>Logiczno-Sensoryczny Introwertyk LSI (ISTj)</h3><p>Instalacja świadomości w pierwszym bloku psychicznym LSI - życie musi być podporządkowane określonemu systemowi - w świecie materialnym i tym dotyczącym stosunków międzyludzkich. Wolicjonalne wysiłki zapewniają utrzymanie, ulepszanie i odbudowę tego systemu kiedy się np. załamie. </p>"+
"<p>Opis mocnych funkcji: </p>"+
"<p><img src='ti.png' alt='Ti'> Ti: logika to piękna struktura, którą LSI próbuje odnaleźć by móc podążać wg jej zasad, włączać się do niej i doskonalić ją. Systematyzuje całe swoje otoczenie wg kategorii, ustalonych hierarchii i praw. Wszystko może być zorganizowane wg różnych zasad i instrukcji, co pomaga porządkować życie.</p>"+
"<p>Postępuje dokładnie zgodnie z instrukcją i gotowy jest przejąć wyższą rolę w jakiejkolwiek hierarchii. Potrzebuje ciężko pracować i osiągać dobre wyniki, a silna wola pozwala mu zająć godną pozycję w społeczeństwie.</p>"+
"<p>Jest dumny z tej swojej umiejętności i jest to podstawowa dziedzina, w której się realizuje. Jego duma cierpi jeśli ktoś inny potrafi zrobić coś lepiej od niego. W takich sytuacjach LSI przykłada się do pracy z trzykrotnie większą siłą by nie pozostać w tyle - za całkowicie nie do przyjęcia uważa możliwość spadku na niższą pozycję w obrębie dziedziny jego aktywności czy zainteresowań.</p>"+
"<p>Może działać bardzo produktywnie. Jest wyjatkowo sumienny - za nadrzędne uważa pracować systematycznie i jakościowo. </p>"+
"<p>LSI jest zawsze konkretne. Bardziej interesują go zasadnicze problemy niż abstrakcyjne teorie. Kiedy głęboko rozważa jakiś problem stara się zlikwidować jego przyczynę. Jeśli czegoś nie rozumie, odwołuje się do różnych źródeł informacji zmierzając do tego, by wszystko zgadzało się z faktami. W takich sytuacjach tok jego myślenia przypomina działanie komputera.</p>"+
"<p><img src='img/se.png' alt='Se'> Se: reprezentuje jego siłę woli, celowość, dyscyplinę i porządek. To podstawowe cechy, na których się opiera podczas praktycznego zastosowania założeń. Stara się zająć jak najwyższą pozycję w hierarchii, żeby dominować w zespole, poprawnie korzystać ze swoich zdolności oraz by jakościowo organizować swoją pracę. LSI żyje w surowym systemie swoich własnych koncepcji - za brak szacunku może przykładnie karać osoby niższej postawione. Czyjś drobny sprzeciw z jego zdaniem potrafi uznać za wkroczenie na jego status i natychmiast atakuje rzekomego napastnika. </p>"+
"<p>LSI jest niezwykle twardy i wytrzymały. Próbuje osiągnąć doskonałość we wszystkim co robi i zapamiętale trzyma się tego faktu upewniając się, że inni nie prześcigają go w gruntowności, uczciwości i w estetycznej wartości jego pracy.</p>"+
"<p>Opis słabych funkcji:</p>"+
"<p><img src='img/fi.png' alt='Fi'> Fi: w relacjach z ludźmi, z którymi nie jest blisko związany, LSI przestrzega norm zachowania i stara się zachowywać poprawnie. Z pewnej odległości wygląda na stosunkowo łagodnego człowieka - rzadko podnosi głos, sprawia wrażenie spokojnego. Należy jednak pamiętać, że LSI nie zawsze mówi to o czym myśli. Nie zawsze jest też w stanie dobrze zinterpretować czyjś nastrój. Często ogłasza coś, co jest prawdziwe w treści ale agresywne w formie. </p>"+
"<p>Trudno mu przychodzi ułożyć sobie stosunki z ludźmi spoza miejsca pracy. Ponadto sprawia mu trudność zmienianie raz ustalonych relacji nawet jeśli czuje, że zmiany są potrzebne. </p>"+
"<p>Z właściwym mu logicznym stylem zachowania, które wygląda na surowe (a od czasu do czasu nawet okrutne), bywa jednak sentymentalny. W wolnym czasie może oglądać programy telewizyjne, które powodują że łzy cisną mu się do oczu. Oznaki ekstrawertycznej etyki (:fe:) u LSI objawiają się nieco infantylnie. Są również takie momenty, że LSI nagle reaguje z furią - wówczas ma kłopot z autokontrolą.</p>"+
"<p><img src='img/ne.png' alt='Ne'> Ne: w definicji oznacza, że próby zrozumienia potencjału przyszłych możliwości, reprezentowanych przez tę funkcję, czynią LSI podenerwowane. Ma trudności z oszacowaniem ukrytych cech ludzi i wykorzystaniem ich w dalszej perspektywie rozwoju produkcji, czy z przewidywaniem możliwości popytu na towar w przyszłości. Nie zawsze też radzi sobie ze zrozumieniem psychologii albo motywów. We wszystkich tych sprawach LSI postępuje ostrożnie. Nieprawidłowo odczytując czyjś wyraz twarzy ma skłonność do generalizowania i stereotypowego podejścia. Rozpoznawanie (rozgryzanie) ludzi sprawia mu trudność. Indywidualność jednostek jest nie do sklasyfikowania i włączenia w system - koncept wymyka mu się spod kontroli kiedy wprowadza swoje założenia w życie. Nie przypuszcza, że to świat w którym jego prosta logika się nie sprawdzi. </p>"+
"<p>Jego introwertyczna intuicja (<img src='ni.png' alt='Ni'>) przeważnie też nie jest mocno rozwinięta - dla niego nie ma żadnych tajemnic, mistycyzmów ani czarów.</p>"+
"<p>LSI w pracy i w domu: </p>"+
"<p>LSI uważa siebie za zdolnego do zajmowania przywódczych pozycji, wszystkie swoje wysiłki skierowane są na wykonywanie pracy lepiej od innych. Wie jak dokładnie formułować zadania i jak je przydzielać, szczegółowo instruuje innych wymagając jednocześnie takiej samej precyzji wykonania. </p>"+
"<p>Jako szef LSI egzekwuje żądania, może nakładać odpowiednio surowe sankcje na tych, którzy źle się zachowują. Po włożeniu sporego wysiłku w osiągnięcie i utrzymanie swojej pozycji uważa za właściwe, by nie polegać za bardzo na opinii podwładnych, natomiast czuje się zobowiązany dokładnie wykonywać polecenia z góry. W celu zjednania sobie szacunku podwładnych woli korzystać z ustanowionych praw i ministerialnych przepisów. </p>"+
"<p>Będąc administratorem uważa, że wszystko musi być podporządkowane temu, co jego zdaniem jest poprawne. Systematyczne podejście ma również do życia, pozbywając się wszelkich oznak pobłażliwości względem siebie i innych. </p>"+
"<p>Jednak nie dajcie się zwieść wrażeniu, że LSI jest chodzącą maszyną. Należy pamiętać, że każdy typ to po pierwsze człowiek. Oczywiście, na podstawie wszystkiego co zostało stwierdzone wyżej nie trudno jest dojść do wniosku, że LSI to człowiek systemu i hierarchii. Najlepiej wychodzi mu okazywanie najmocniejszych aspektów swojej natury w precyzyjnych i określonych warunkach. Kiedy czuje się częścią systemu/grupy jest spokojny i pewny siebie. </p>"+
"<p>Mówiąc o tym w psychotypie należy zauważyć, że rzadko można spotkać ludzi posiadających taki sam stopień solidności jak on. Jest uczciwym partnerem, kierownikiem, pracownikiem i lojalnym małżonkiem. Jeśli ktoś szuka osoby, na której chce polegać, musi wiedzieć że pod tym względem nikt nie przewyższa LSI. W związku partnerskim jest surowy i prawdziwy, ale nie wolno zapominać o jego silnych uczuciach dotyczących ważności i porządku. To osoba, która pracuje niezwykle sprawnie w sferze przemysłowej i która zdecydowanie korzysta z okazji by wykonać swoje zobowiązania. LSI unika brania na siebie twórczej roli, gdzie wymagana jest wyobraźnia i umiejętność niestandardowego myślenia.</p>",
EIE: "<h3>Etyczno-Intuicyjny-Ekstrawertyk EIE (ENFj)</h3>",
IEI: "<h3>Intuicyjno-Etyczny-Introwertyk IEI (INFp)</h3><p>Świadomość jest zainstalowana w wiodącym bloku. Główną wartością romantyka jest jego wspaniała wyobraźnia. Dzięki :ni: jest w stanie przenikać przez przeszłość i przyszłość, czuć otaczający świat w całej jego okazałości, obserwować dynamikę obecnych zdarzeń, ponad to dzięki :fe: jest zdolny by emocjonalnie zainspirować ludzi do wykonania czynności uznawanych za potrzebne.</p>"+
"<p>Opis działania silnych funkcji:</p>"+
"<p>Ni <img src='img/ni.png' alt='Ni'> : funkcja programowa. Introwertyczna intuicja u romantyka dyktuje, że jego świadomość jest zatopiona w modelowaniu przejściowych procesów. Żegluje, przepływa w obie strony w przyszłość i przeszłość. Jego świadomość w odróżnieniu od Krytyka(ILI) jest skoncentrowana na etyce i przez to nie jest on tak skoncentrowany na problemach materialnego świata i produktywności preferując rozwój w czasie ludzkich emocji i relacji pomiędzy nimi.</p>"+
"<p>Romantyk wewnętrznie obserwuje, że wszystko jest w nieustannym ruchu: dzieci biegają, dorośli pracują, zachowania manifestują wzorce, rzeki płyną, kształty w chmurach poruszają się po niebie.. Czas zawiera możliwą do zidentyfikowania esencje tego wszystkiego. Marzyciel i romantyk, szczęście i rozważania są znaczeniem jego egzystencji. Ciągnie go do nowel zawierających marzenia i przygody. W tym wszystkim bierze udział razem z wyimaginowanymi bohaterami w ich przygodach. Romantyk uwielbia poddać się na długi czas poddawać się marzeniom. Jego marzenia z reguły skupiają się na czymś pięknym i wytwornym np. podróż dookoła świata na pokładzie komfortowego liniowca (razem z wytwornym towarzystwem), w luksusowym domku z kominkiem, cudowna miłość...</p>"+
"<p>Jednakże Romantyk potrafi również wyczuć dojrzewanie wydarzeń tak, że jest w stanie wyłapać ledwo dostrzegalną płynność i dynamikę zmian nastrojów w społeczeństwie. Dokładnie czuje moment w czasie w którym musi działać, zwłaszcza sytuacje zbliżania się kryzysu i niebezpieczeństwa kiedy to czuje się wyraźnie zaniepokojony.</p>"+
"<p>Raczej z pomyślnością udaje mu się zauważyć u innych charakterystyczne cechy, zdolności i potencjał tak więc, czasem ciągnie go do ludzi z zamiarem ich wykorzystania. Z szacunkiem do własnych zdolności i talentów posiada on wewnętrzne, często ukryte przekonanie, że prześciga on innych swoją duchową arystokracją uważając się za członka elity, ale z reguły nie próbuje nawet pokazywać tego przekonania.</p>"+
"<p>Introwertyczna intuicja w wiodącym bloku blokuje innym możliwość obserwowania Romantyka, bowiem jest bardzo ciężko zanalizować jego zachowanie, a on często skłania się do usprawiedliwiania siebie we wszystkim. Jego tendencja do ignorowania rzeczywistości i jego trudności we własnym ocenianiu mogą doprowadzić go do egocentryzmu i nadmiernym oddawaniu się wyimaginowanemu światu.</p>"+
"<p>Fe <img src='img/fe.png' alt='Fe'> : funkcja wdrożenia programu. Po pojęciu tendencji występowania określonych zjawisk, Romantyk stara się w emocjonalny sposób wpłynąć na otaczających go ludzi aby pchnąć ich w kierunku odpowiednich działań. Wie w jaki sposób manipulować ludźmi za pomocą nastrojów by zainicjować niezbędną reakcje i uczucia. Romantyk nie wykonuje tego na siłę, lecz za pomocą perswazji, często poprzez „emocjonalną falę” która sygnalizuje, że zginie on jak krucha delikatna jednostka jeśli pomoc nie nadejdzie i jego prośby nie zostaną spełnione. Trudności sprawia mu działalność biznesowa dlatego stara się rozporządzić swoją pracę na inne osoby. Romantyk jest bardzo łatwo inspirowany dzięki sprzyjającemu klimatowi, ale też bardzo łatwo go urazić: wystarczająca przecząca intonacja potrafi wprowadzić go w trwały stan przygnębienia na cały dzień.</p>"+
"<p>Jest on bardzo pewny w swojej poprawności, a jeśli ci którzy go otaczają nie będą potrafili wykonać do końca niezbędnych działalności, oburzenie i ckliwość Romantyka może osiągnąć taki poziom na długi czas, że nie będzie mógł tego przerwać, gdyż będzie chciał z wielkim zapałem dowieść swojej pozycji wszystkim.</p>"+
"<p>Uwielbia być w centrum uwagi gdy jest w otoczeniu znajomych ludzi. Wie jak skierować siebie na innych poprzez uśmiech, poparcie czyjegoś zdania lub poprzez bycie grzecznym i konformalnym.</p>"+
"<p>Jeśli romantyk przeżywa atak melancholii i niezadowolenia a takie zdarzają się często to wtedy będzie się izolował. Gdy czarny okres kończy się znów chce pokazywać jako pogodny i bystry z pozytywnymi oczekiwaniami skierowanymi na zmiany w życiu.</p>"+
"<p>Jeśli znajduje się w kochającej i zrozumiałej atmosferze pokazują się jego najlepsze wartości: bycie pełnym troski i umiejętność w użyczaniu moralnego wsparcia. Rozumiejąc nastroje tych na których mu zależy stara się je poprawić, jest gotowy by ukazać ciepło i współczucie.</p>"+
"<p>Posiadając wysoką emocjonalność Romantyk z wyczuciem odpowiada na wszystkie formy sztuki. W szczególności uwielbia muzykę i poezje, często tworzy własną. Często uczęszcza na koncerty i rozwija swój literacki dar.</p>"+
"<p>Opis działalności słabych funkcji:</p>"+
"<p>Te <img src='img/te.png' alt='Te'> : Romantyk jest skupiony na swoich marzeniach i to marzenia właśnie pomagają mu się ukryć przed rzeczywistością, która czasami okazuje się zbyt szorstka i surowa jak na jego gust.</p>"+
"<p>Jego działalność w biznesie jest nie do przewidzenia odkąd jego zdatność ściśle zależy od nastroju: krótkie napaści naprzemiennie z okresami przedłużającej się bierności. Z reguły on ma niski zapas energii i dlatego ma trudności ze zmuszeniem się do pracy. Wrodzona niemoc, nagłe osłabienie i niska działalność są często rekompensowane przez potrzebę przedłużenia snu. Z tego samego powodu bez duchowego wsparcia często znajduje się na niższej pozycji społecznej niż by się mogło wydawać z uwagi na jego zdolności. Stąd Romantyk ma skłonności do przyglądania się energicznym ludziom, którzy posiadają wyższy status społeczny z cichym poczuciem zazdrości i poczuciem, że życie skrzywdziło go i mimowolnie próbuje usprawiedliwić siebie szukając ludzi których mógłby uznać za przyczynę swoich własnych niepowodzeń. Przez ten czas on pociesza siebie w fakcie, że jego szlachetne zasady, kruchość i wytworność psychiki nie pozwalają mu działać w taki sam sposób jak inni działają. W ten sposób usprawiedliwia swoją bierność poprzez stawianie siebie moralnie ponad tymi którzy go otaczają tym samym chroni w psychologiczny sposób chroni swoje słabości. Romantyk ma trudności z zaakceptowaniem odpowiedzialności osobistej. Woli zrzucić odpowiedzialność na innych, szczególnie w pracy jeśli sprawy idą źle.</p>"+
"<p>Si <img src='img/si.png' alt='Si'> : normatywna funkcja. We wszystkim co dotyczy jego zdrowia i wyglądu zewnętrznego stara się nie pokazywać gorzej niż inni przywierając do społecznych standardów. Prawda, że jego wrodzona elegancja powinna być zauważona, jego umiejętność ukazania się w wyrafinowany sposób, ubrania się z doskonałym smakiem, nawet jego sytuacja finansowa nie jest najlepsza. Kobieta tego typu może się spóźnić do pracy nawet dwie godziny, ale jeśli się już pojawią to w idealnie zadbanym wyglądzie, w eleganckiej sukience z dokładnie wybranymi dodatkami (preferując nie jasne, lecz ciemne kolory odzieży).</p>"+
"<p>Romantyk ma trudności z zarządzaniem funduszami, nie rozważa swojego budżetu wcześniej niż kupuje piękne i eleganckie rzeczy. Nawet jeśli brakuje mu użytecznych rzeczy, a jego fundusze nie są w najlepszej kondycji to jest dla niego bardzo trudnym myśleć o tak prozaicznej rzeczy jaką są pieniądze. Dla niego pożądanym jest zabawiać się w każdy możliwy sposób.</p>"+
"<p>Romantyk nie jest przywódcą tylko zawsze niewolnikiem. Przychylne warunki dla działalności muszą być jak to tylko możliwe twórcze i kreatywne. Ciężko mu pokazywać inicjatywę by zderzyć się z otoczeniem, stąd często stosuje się do norm i zasad podyktowanych przez społeczeństwo w którym żyje.</p>"+
"<p>Romantyk w pracy i domu:</p>"+
"<p>Sentymentalny i niezdecydowany, nienawidzi brać odpowiedzialności nie tylko za innych, ale też za siebie. Romantyk preferuje nie zajmować pozycji lidera. Jeśli jednak los zmusza go do takiej pozycji może on z powodzeniem poradzić sobie ze strategicznymi zadaniami. Łagodnie wiąże się z podwładnymi i może używać uczuć jako narzędzia do wpływania na nich od których wymaga delikatnych stosunków. W tego typu sytuacjach jest to lepsze jeżeli Romantyk ma prowadzić małą grupkę.</p>"+
"<p>Dla romantyka miłość i rodzina mają ogromną wartość. Potrafi głęboko emocjonalnie zaangażować się w relacje z kimś i przez lata może pamiętać i sympatyzować o kimś dla niego ważnym nawet jeśli ich stosunki się pogorszyły. Często jego marzenia dostarczają innym romantycznych wartości, które mogą nawet nigdy się nie spełnić w prawdziwym życiu.</p>"+
"<p>W życiu rodzinnym ma wielkie trudności odnaleźć się w domowych pracach, jest to jego wróg numer jeden. Jeśli sztywno i skrupulatnie wymagasz od romantyka wykonania domowych prac możesz spodziewać się złości z jego strony, a nawet dyskusji na ten temat.</p>"+
"<p>Z uwagi na rozwiązanie tego problemu, w dopuszczalny sposób, romantyk ma skłonności do manipulowania krewnymi pokazując swoją niemoc która pomaga mu uniknąć domowych obowiązków i zrzuceniu odpowiedzialności na innych z dala od siebie. Dla tego celu z łatwością potrafi znaleźć słabe punkty u innych i umiejętnie dzięki nim na nich wpłynąć. Kiedy to nie skutkuje romantyk może niespodziewanie zacząć zachowywać się w ostro i szorstko z bliskimi sobie ludźmi, pomimo, że z ludźmi z którymi jest w dalszej relacji zachowuje się miło i delikatnie. Tylko w ekskluzywnej sytuacji, kiedy romantyk doświadcza miłości w stosunku do ludzi dla niego ważnych jego wewnętrzne siły wystarczą by dostarczyć niezbędnej energii do wykonania domowych prac z własnej woli.</p>"+
"<p>Romantyk uwielbia gościć gości w swoim domu, aby pięknie dekorować jego otoczenie. Dla niego jest to ważniejsze od nawet jedzenia, jedynie uroczysty posiłek jest postrzegany jako sposób miłego kontaktu. Choćby nie wiadomo przez co był zajęty, ze względu na innych przedstawi elementarną zasadę fantazji: przyjęcie gości, instrukcje, rzemiosło... Ale ze względu na siebie postępuje w taki sam nieinteresujący sposób. Romantyk dla przykładu nie przygotowuje sobie dobrego posiłku, a zamiast tego zadowoli się na obiad kanapką z dżemem (jeśli taka jest możliwa do natychmiastowego przygotowania z lodówki).</p>",
LIE: "<h3>Logiczno-Intuicyjny-Ekstrawertyk LIE (ENTj)</h3>",
ILI: "<h3>Intuicyjno-Logiczny-Introwertyk ILI (INTp)</h3>",
SEE: "<h3>Sensoryczno-Etyczny-Ekstrawertyk SEE (ESFp)</h3><p>Umiejscowienie samoswiadomosci w glownym bloku: SEE charakteryzuje się checia rozszerzania swoich wplywow, pozadajac autorytarnosci i zaszczytow. By zrealizowac te cele wazne dla niego jest by nauczyc się kontrolowania ludzi, przez manipulowanie ich slabosciami i ignorowanie talentów.</p>"+
"<p>Opis silnych funkcji:</p>"+
"<p><img src='img/se.png' alt='Se'> Se: Silny indywidualista. Nic nie powstrzyma go przed osiagnieciem celu, dazy do niego niezaleznie od okolicznosci. „Tylko sukces i zwyciestwo!” SEE – zawsze ambitny i pewny siebie lider sytuacji. Naturalnie okazuje się być w centrum uwagi w kazdej grupie. Pragnie zycia bez porazek, rzadzenia, kontroli; prowadzi do rywalizacji, wspolzawodnictwa miedzy innymi kandydatami. SEE doskonale wyczuwa niuanse jego relacji, a także nastroj ludzi wokół niego. Jeśli ktos z kim musi się uporac, jest w stanie trzymac go na dystans, sprzeciwiac się mu, SEE nie będzie się nim klopotac, ale gdy czuje otwarta opieszalosc w kontaktach, może naciskac i stac się bezceremonialny. Nie będzie szukal konfliktu bez powodu. Może dzialac dyplomatycznie, jeśli chce osiagnac jakis cel. W obliczu konfliktu, może zachowywac się bezposrednio i jednoznacznie. Zawsze i we wszystkim, SEE stara się odslonic swoje pozytywy innym. Cierpiac z powodu niesprawiedliwosci, znajdzie sposób by odwrocic ja o 180 stopni i pokazac się w taki sposób, ze nie tylko nie traci twarzy, ale i przybiera postawe zwyciezcy. Nigdy nie przyznaje się do porazek. SEE ma sklonnosci do nie tracenia glowy w ciezkich sytuacjach; w takich przypadkach raczej reaguje z wieksza sila, mobilizujac się by przezwyciezyc trudnosci. Energiczny i glosny, sprawia wrazenie jakby zajmowal tyle przestrzeni ile to możliwe. SEE w zauwazalny sposób rozwija ciemna strone ekstrawertycznej sensoryki (Se), zwlaszcza gdy postrzegany od zewnatrz. Uwielbia jasna, krzykliwa odziez; woli pokazywac się jako ‘ekstrawagancki indywidualista’, raczej niż ‘codzienna szara mysz’. Czerpie przyjemnosc z bycia dostrzeganym, skupiania na sobie uwagi innych.</p>"+
"<p><img src='img/fi.png' alt='Fi'> Fi: SEE perfekcyjnie manipuluje ludzmi, sterujac ich nastrojami i pragnieniami. Uwielbia być w centrum, fascynowac innych swoimi pomyslami. Latwo prowokuje klotnie, ale rownie latwo umie doprowadzic do pojednania, prowadzi niby gre; pociaganie sznurkow. Jest dla niego wazne, by utrzymac na swój temat pozytywna opinie, nie wypasc z towarzystwa, podkreslac swoje zdolnosci i szczególnośc. Jest wspaniałym aktorem i może przejawiac wybitne talenty dymplomatyczne, kulturalny. Dobrze wyczuwajac nastroje innych, SEE może wspierac przyjaciol w trudnych chwilach; okazujac swoje zaangazowanie, sympatie. Bedac naturalnie wolicjonalny i pogodny, pobudza innych do dzialania, nie zalamywania się czy placzu. SEE – czlowiek z zywym i intensywnym zasiegiem emocjonalnym – od wscieklego oburzenia do glosnego entuzjazmu. Dzieki temu zawsze uda mu sie wlaczyc w emocjonalne sytuacje, gdzie jest gotow do dzialania: do wspolczucia, potepienia, walki – i bez względu na to jak wyraza swój stosunek do tego zdarzenia, zawsze jest absolutnie pewien slusznosci swojej oceny. Ochoczo, otwarcie okazuje zainteresowanie plcia przeciwna. Mimo, ze odrzucenie może być bolesne, nie daje za wygraną. Silna pobudliwosc i emocjonalnosc daje swój wyraz w wysokiej seksualnosci. Ciezko mu ja opanowac, zwlaszcza w latach mlodzienczych. SEE jest skory do zazdrosci, może często podejrzewac partnera o zdrade i nie wybacza niewinnych flirtow. Bogata emocjonalnosc również widoczna jest w pociagu do sztuki; zwlaszcza uwielbia muzyke i spiew. Zdarza się, ze sam komponuje, demonstrujac wszystkim swój talent i umiejetnosci.</p>"+
"<p>Opis slabych funkcji:</p>"+
"<p><img src='img/ne.png' alt='Ne'> Ne: Jako, ze koncentruje cala swoja uwage na polu sensorycznym, radzi sobie dobrze z interpretowaniem zewnetrznych dzialan ludzi, zjawisk i rzeczy, ale nie potrafi zrozumiec ich ukrytego znaczenia. Dobrze odczuwa, ale zle pojmuje doglebnosc. Z tego powodu trudnosc sprawia mu wlasciwe ocenianie ludzi, otoczenia i nawet siebie, trudno mu znalezc swoje miejsce w zyciu. Niemniej jednak SEE będzie staral się rozwijac role wrazliwego i uwaznego czlowieka, zdolnego do odpowiedniej oceny biezacej sytuacji. Trudno mu również, patrzac pod katem intuicji czasu, precyzyjnie zaplanowac dzialania uprzednio. Wtedy staje się niecierpliwy, jako, ze nie potrafi czekac na cos, czego potrzebuje już teraz.</p>"+
"<p><img src='img/ti.png' alt='Ti'> Ti: Slabosc tej funkcji ukazuje fakt, ze dzialania SEE zazwyczaj ma nieuporzadkowana, chaotyczna nature; w jego zachowaniu nie ma specyficznego schematu dzialania. Nawet jeśli SEE posiada znaczna wiedze na jakis temat, nie zawsze jest w stanie z niej skorzystac; jego emocjonalizm często przeciaza logike. Jego uczonosc objawia się w chwilowych blyskach, ale nigdy nie udaje mu się utrzymac jednego tematu na dlugo. Jako ekstrawertyczny sensoryk, jego potrzeba dla zewnetrznej aktywnosci często przejawia się w niekontrolowanych ruchach motorycznych. Najpierw dziala potem mysli. Zrozumienie tego typu logiki nie jest jego najmocniejsza strona, SEE rekompensuje to w pracy, przywiazujac wieksza role do osobistych kontaktow i znajomosci. Probuje wypracowac specyficzne stereotypy dzialania w roznych sytuacjach, by nie zostac zlapanym na porazce. Dla SEE waznym jest by rezultat jego pracy był widoczny i namacalny. Pragnie dostac cos w zamian za jego wysilki. Przykladem tego może być uznanie wspolnoty (status spoleczny) i/lub materialny dowod uznania (mieszkanie, samochod, najnowszy gadzet, najbardziej elegancka, prestizowa odziez…).</p>"+
"<p>SEE w pracy i w domu</p>"+
"<p>Kiedy zajmuje kierownicza pozycje SEE maksymalizuje uzycie swoich silnych stron: jego aktywnej natury i zdolnosci do manipulacji. Niezaleznie od wszystkiego probuje osiagnac cel; w tym przypadku może uzywac srodkow wolicjonalnego nacisku, wodzony wizjami ewentualnych zyskow. Najlepiej radzi sobie z rozwiazywaniem zadan rodzaju taktycznego – blyskawicznie orientuje się w sytuacji, latwo roznicuje metody operacji, ale w tym samym czasie slabo wyobraza sobie dalekie perspektywy. Bolesnie cierpi i negatywnie reaguje na krytyke od innych, zwlaszcza jeśli poruszany jest temat jego slabych zdolnosci logicznych, chaotycznego zachowania i nieprzemyslanych decyzji. Czasem SEE będzie szukal sposobu na pozbycie się wspolpracownika, który narazil go na nadmierna krytyke. Jeśli rzadzi mala grupa, jego ruchliwy styl kierownictwa może prowadzic do napietych relacji. SEE duzo lepiej sprawdza się w roli lidera zjawisk na wieksza skale, zwlaszcza jeśli grupa sklada się z rozsadnych i dalekowzrocznych czlonkow, zdolnych do wplywania na niego logicznie, lub oceniania spontanicznosci jego dzialan z dystansu. W rodzinie SEE, wedle zasady, zachowuje się jak lider/dyktator, on decyduje kto ma być za co odpowiedzialny i co musi być zrobione w danym momencie. Rodzinne wakacje zawsze budza jego entuzjazm, który czasem znajduje ujscie w miejscu pracy, gdzie w kalendarzu zawsze rezerwuje czas na rozrywke. Wie jak i uwielbia przygotowywac się na takie okazje, kocha dobre jedzenie.</p>"+
"<p>Z zapalem mowi nie tylko o sobie, ale również o swojej rodzinie: sa najlepsi na swiecie, najbardziej inteligentni, najbardziej zdolni; nikt nie może rownac się z ich niezliczonymi talentami. SEE zazwyczaj uwielbia zwierzeta, postrzega ich jako czlonkow rodziny.</p>"+
"<p>Podsumowanie funkcji:</p> <p>1. <img src='se.png' alt='Se'> Se: Energiczna, silna osobowosc. Probuje osiagac wyznaczone cele za wszelka cene. Silne wolicjonalne cechy. Wie jak dbac o zdrowie swoje i innych. Estetyka w domu, zywnosci; wszystko to wywodzi się z ogolnych zasad wartosciowania zdrowia.</p> <p>2. <img src='fi.png' alt='Fi'> Fi: Dzieli ludzi na przyjaciol i nieznajomych, wyzszych i nizszych, probuje zajmowac jak najwyzsze miejsce w hierarchii. Wie jak nawiazac kontakt z innymi, latwo nimi manipuluje by osiagnac cel.</p> <p>3. <img src='ne.png' alt='Ne'> Ne: Probuje sprawiac wrazenie osoby zdolnej do wnikania w sedno wydarzen, ale często przecenia swoje mozliwosci w tym zakresie. Sklonny do impulsywnego dzialania, nie będzie poddawal się swiatu marzen i fantazjowaniu przez duze okresy czasu, a wiec i nie będzie w stanie pojac dalekich perspektyw – zbyt twardo stapa po ziemi.</p> <p>4. <img src='ti.png' alt='Ti'> Ti: System, struktura organizacyjna, obiektywne prawa – to obszary z którymi zmaga się SEE. Trudno mu gleboko i gruntownie analizowac problem. Bedac bardzo energicznym, zachowuje się w chaotyczny, zdezorientowany sposób.</p>"+
"<p>Preferencje zawodowe:</p> <p>SEE sprawdza się w profesjach wymagajacych kontaktu z ludzmi na wszystkich plaszczyznach: aktywnosci politycznej, dzialanosci militarnej (z jak najwyzsza możliwa ranga), prawoznawstwie, dzialanosci artystycznej, nauczaniu, handlu i pracy sekretarskiej. Przedstawiciele tego socjotypu powinni podchodzic ostroznie do wyboru pracy o podlozu naukowym, zwlaszcza w oparciu o teoretyczne dyscypliny.</p>"+
"<p>Relacje Potencjalnie korzystne: ILI (INTp), IEI (INFp), SLI (ISTp), LIE (ENTj) Potencjalnie niekorzystne: LII (INTj), LSI (ISTj), EII (INFj), SEI (ISFp)</p>",
ESI: "<h3>Etyczno-Sensoryczny-Introwertyk ESI (ISFj)</h3>",
LSE: "<h3>Logiczno-Sensoryczny-Ekstrawertyk LSE (ESTj)</h3>",
SLI: "<h3>Sensoryczno-Logiczny-Introwertyk SLI (ISTp)</h3><p>Umiejscowienie świadomości w wiodącym bloku: dla SLI wszystko w świecie musi być harmonijne, proporcjonalne i wyważone; najlepszą metodą osiągnięcia tego jest estetyczna i jakościowa aktywność.</p>"+
"<p>Opis mocnych funkcji:</p>"+
"<p><img src='img/si.png' alt='Si'> - reprezentowana przez uczucie harmonii, piękna i zdrowia. Wszystko musi być zbalansowane. Dotyczy to jego pracy, relacji z ludźmi, doboru artykułów domowych i przez wszechstronny rozwój fizycznie zdrowego ciała.</p>"+
"<p>SLI sprawnie zapamiętuje kolory, nieprzyjemne zapachy i wszelkie wrażenia odbierane za pomocą zmysłów. Może z łatwością narysować je używając swojej pamięci. Pamięta smak przepysznej potrawy przez lata. Pod wieloma względami jest estetą. Często posiada dobry gust artystyczny. Jest on charakterystycznie niezachwiany i kontemplacyjny, pozbawiony emocjonalizmu. SLI nie powiązuje ludzi za pomocą uczuciowej energii, natychmiast oddaje się bardzo podstawowym zmysłowym przyjemnościom: woli bez pośpiechu \"rozkoszować się\" swoimi doświadczeniami, oddzielać w czasie przyjemne od nieprzyjemnego.Otaczający go świat dostarcza mu szerokiej rangi wrażeń, których bacznie wyczekuje. Doskonale zdaje sobie sprawę ze swojego fizycznego stanu, możliwości swego ciała i z tego powodu może z powodzeniem zajmować się sportem - przeważnie w formie indywidualnej. Lecz nawet ze względu na te umiejętności, SLI często dystansuje się do sportu na rzecz zdrowego trybu życia, które zapewnia mu ogólne poczucie harmonii i równowagi.</p>"+
"<p>Przejawy tej funkcji mogą być dostrzeżone w powierzchowności SLI: zawsze ubiera się stosownie w prostym, eleganckim, sportowym stylu: jego ubrania są dobrane głównie przez wzgląd na wygodę.</p>"+
"<p><img src='img/te.png' alt='Te'> - wszystko wokół niego jest wygodne, użyteczne i atrakcyjne, dzięki jego praktycznej działalności. SLI jest mistrzem swej pracy. Wszystko co robi, robi z perfekcją; pracuje dokładnie i robi rzeczy nie tylko użyteczne, ale również efektownie zaprojektowane. Bardzo dobrze pojmuje możliwości użycia jakiegoś materiału, nie innego i dokładnie wie w jakich przypadkach jakiego materiału lepiej użyć. Studiuje wyprodukowane modele o wysokiej jakości. Jest zainteresowany używaniem najbardziej efektywnej technologii. Kocha swoją pracę. Może pracować od wczesnego ranka do nocy, jeśli to konieczne. Nie podejmuje drogi na skróty, żeby pracowało się wygodniej i przyjemniej.</p>"+
"<p>SLI wie jak skupiać się na głównym celu nie zapominając o swych komponentach. Ta umiejętność jest nieodłączna w czytaniu lektur, budowaniu domu i trenowaniu sportu. Jeżeli, z jego punktu widzenia, osiągnął perfekcję, wówczas uwielbia zmieniać cel swojego działania: męczy go wykonywanie tej samej rutynowej pracy przez dłuższy czas. W tym zakresie jego irracjonalność jest rozwinięta.</p>"+
"<p>SLI spędza czas na wystarczającym przygotowywaniu się przed rozpoczęciem nowego projektu; zbiera materiał i gromadzi różne informacje. Lubi próbować różne rzeczy po to, aby lepiej wyczuć możliwości w nadchodzącej pracy.</p>"+
"<p>Z jednej strony posiada charakterystyczną wytrwałość. Z innej strony przedstawia pewien letarg. Może trochę potrwać zanim rozpocznie jakąś czynność, ale w ostatnim momencie mobilizuje się i szybko kończy swoją pracę. Nie zacznie zadania, które w jego odczuciu jest niepewne. Preferuje pewność i wyrazistość, kalkulację, ale nie ryzyko.</p>"+
"<p>Uwielbia pracować niezależnie dlatego, że wtedy nie musi się do nikogo dostosowywać. Szczególnie irytują go nielogiczne polecenia.</p>"+
"<p>Opis słabych funkcji:</p>"+
"<p><img src='img/fe.png' alt='Fe'> - SLI woli chować swoje emocje. Pozornie wydaje się on być niedostępny. Jest to częściowo związane z faktem, iż jest niezbyt zdolny do wyczuwania nastrojów otaczających go ludzi i również boi się, że pokazanie swoich emocji może wydać się niestosowne i śmieszne. To zmusza go do utrzymywania psychologicznego dystansu. Ale ten dystans nie będzie dotyczył tych, którzy szukają jego poparcia - najprawdopodobniej nie odrzuci tych ludzi, co więcej wysłucha ich i będzie wspierać, nawet wykazywać zrozumienie dla ich nieszczęścia.</p>"+
"<p>Jednak, wrażliwość i sentymentalność jest jemu obca: prawdopodobnie będzie 'brał udział' w czyimś nieszczęściu w celu posiadania - nie rozwijania emocji. Introspekcja również nie jest jego żywiołem.</p>"+
"<p>W konfliktowych sytuacjach SLI trzyma się z dala od możliwych skandali. Do pewnego stopnia wydaje się być apatyczny i niezachwiany. Lecz, jeśli ktoś najedzie na jego tajne psychologiczne 'terytorium', gdzie nikt nie ma dostępu lub usiłuje poniżyć jego poczucie własnej wartości - SLI może niespodziewanie wybuchnąć i zostać doprowadzony do furii. W tym stanie może stracić panowanie nad sobą i być zdolny do zaatakowania winowajcy. Przez wzgląd na jego emocje, jak i również na jego prace, nie może być szybko uspokajany - szczególnie po eksplozji.</p>"+
"<p><img src='img/ni.png' alt='Ni'> - błyski fantazji i bezmiaru nie są ani trochę charakterystyczne dla SLI. Nie może wystaraczająco ocenić perspektywy jednego zadania w porównaniu do innego i dlatego też rozwiązywanie strategicznych problemów jest dla niego trudnością. Często okazuje się, że popełnia błędy w ocenianiu ludzi: czasami jest skłonny do postrzegania ich w przesadnie pozytywnym świetle i potem czuje się zawiedziony przez swoje oczekiwania. Przymusowo raczej polega na swej umiejętności projektowania, aby poradzić sobie z długoterminowymi planami, niż na intuicji. Patrzy na plany innych i podporządkowuje swoje własne do ich norm.</p>"+
"<p>SLI w pracy i w domu:</p>"+
"<p>Jako lider, SLI realizuje swoje plany, jeśli chodzi o estetykę i praktyczność; dlatego też twór tego psychologicznego typu będzie wysokiej jakości i pięknego projektu. Jednak nie zmierza do bycia liderem, nawet jeśli obdarzony jest talentem. Jeżeli mimo to jest konieczne zajęcie tego stanowiska, będzie najpierw próbował ustalić kto co może zrobić, gdy bardziej racjonalne jest użycie każdego pracownika w strefie, która odpowiada jego/jej poziomowi umiejętności. W kierownictwie SLI obstawia przy zasadach zespołu, próbuje materialnie pobudzać swoich współpracowników.</p>"+
"<p>Trudnością jest dla niego przewidywanie odległych perspektyw w rozwoju produkcji. Jest lepszy w taktycznych łamigłówkach, niż w strategii; dlatego lepiej jest, kiedy przewodzi małej grupie.</p>"+
"<p>Preferuje rozwiązywać kompromisem konfliktowe sytuacje. Jednakże, kiedy miesza się do ustalonych fundamentalnych zasad, nie rezygnuje ze swej pozycji. </p>"+
"<p>Charakterystyczne własności jego natury są wyraźnie rozwinięte w życiu rodzinnym. Jest dobrym (mężem i) domatorem, solidnym i niezawodnym. Bardzo ważne jest dla niego zapewnienie swojej rodzinie materialnego bytu: zagwarantowanie wystarczających zasobów jedzenia, ubrań i obuwia. Często lubi obcować z dziećmi i być ich strażnikiem. Kiedy dzieci sprawiają mu przykrość, rzadko go ranią. Często jest dobrym nauczycielem, rozsądnym i powściągliwym. Jest skłonny do brania słabych pod swoją niezawodną i solidną opiekę. </p>"+
"<p>Nie tylko nie unika domowych prac, ale je uwielbia. Będzie cudownie i gruntownie naprawiał mieszkanie, solidnie budował dom, pracował w ogródku nad warzywami ... Konieczne jest, aby inni przystosowali się do jego nawyków. Irytuje go popędzanie.</p>"+
"<p>Preferencje zawodowe:</p>"+
"<p>Jest efektywny w każdej przemysłowej lub manualnej działalności. Mistrz w pracy, kocha pracować niezależnie lub w małej grupie, nie zmierza do zajmowania kierowniczych stanowisk. Może okazać się uzdolnionym artystą, projektantem, muzykiem. Połączenie z fizycznym stanem i otoczeniem może zaprowadzić go do medycyny, sportów, jak i również w profesje związane z kuchnią (gotowaniem).</p>",
IEE: "<h3>Intuicyjno-Etyczny-Ekstrawertyk IEE (ENFp)</h3><p>Umiejscowienie świadomości w wiodącym bloku: dla IEE najważniejsze jest to co ich zdaniem jest najbardziej interesujące i pasjonujące - w tym widzą potencjalne możliwości i obiecujące kierunki, zarówno w społeczeństwie jak i w sferze produkcji, porządkują ludzi w stronę realizacji tych możliwości.</p>"+
"<p>Opis mocnych funkcji:</p>"+
"<p><img src='img/ne.png' alt='Ne'> - dla IEE najważniejsze jest znajdowanie, dostrzeganie i znajdowanie nowych możliwości, gdzie wcześniej nigdy ich nie było. Jego uwaga jest przykuta do wszystkiego, co jest wyjątkowe i niezwykłe. Jest pobudzany przez nowe idee i chętny do odbierania informacji z każdego źródła. To może prowadzić do niespodziewanych naukowych odkryć, muzealnych pokazów, nietradycyjnych metod rozrywki lub leczenia, wędrówek, spotkań z nowymi ludźmi ...</p>"+
"<p>Jego zainteresowanie szybko się zapala, niczym dziecka na widok nowej zabawki, ale jak tylko obiekt rozrywki traci swą nowość, szybko przestaje być nim zainteresowany. Jego zainteresowanie szybko znika, po czym podąża do oczarowania się nową możliwością. Z powodu swojego świeżego spojrzenia i otwartości na nowe rzeczy IEE często posiada wiele umiejętności i talentów. Sprawia mu przyjemność testowanie siebie w nowych dziedzinach - dużo reprezentantów tego typu dobrze projektują, mogą być łatwo trenowani sportowo i muzycznie, są zafascynowani psychologią, teatrem, kinematografią i sztuką. Testują momentalnie swoje możliwości, piszą wersy oraz są świetnymi anegdociarzami.</p>"+
"<p>Z reguły IEE jest bardzo wnikliwy: może łatwo przewidzieć czego można spodziewać się w przyszłości od danej jednostki, szczególnie jeśli jest z nią wystarczająco zaznajomiony. Jak nikt inny wie jak inspirować, odsłaniać możliwości i talenty innych, okazywać wsparcie innym w realizacji siebie. Ceni w ludziach życzliwość, wyjątkowość i talent. Zazdrość jest jemu obca - jego pomysłowa natura pozwala mu dostrzegać wiele możliwych dróg wartych podążania. Nawet w starszym wieku jest zawsze gotowy do uczenia się nowych rzeczy.</p>"+
"<p><img src='img/fi.png' alt='Fi'> - wszystkie możliwości muszą być zorientowane na innych po to, aby na nich oddziaływać. IEE łatwo nawiązuje kontakty i szybko staje się 'duszą towarzystwa'. Może połączyć się z widzami i studentami, jest gotowy do grania na ich uwadze. Jego zachowanie jest zauważalnie impulsywne, jego nastrój często się zmienia, ale próbuje ukrywać przed innymi wszystkie negatywne doświadczenia, aby uniknąć osądzenia. </p>"+
"<p>IEE posiada dar inspirowania swojego otoczenia w stronę działań, które mogą być uznawane za obiecujące i objawiające się w dłuższym czasie. Żonglowanie nastrojami innych uznaje za interesujące do manipulowania. Tutaj jest eksperymentatorem, z ciekawością obserwującym reakcję innych na jego emocjonalne prowokacje. Cudownie kieruje emocjonalną sferą, daje komplementy innym i jest w tym szczery. Zauważa pozytywne nieodłączne cechy innych, lecz czasem może się przekomarzać i próbować trochę podrażnić ... nie jest nigdy to robione z rzeczywistej złośliwości, ale w żartobliwy sposób, jakby to było grą.</p>"+
"<p>Życzliwość i optymizm są zazwyczaj nieodłączne w ludziach tego typu. Są żarliwi w oferowaniu pomocy, ale nie trzeba liczyć zbyt mocno na spełnienie ich obietnic, ponieważ są zapominalscy i inni ludzie łatwo odwracają ich uwagę. </p>"+
"<p>Przez wspaniałe rozumienie nastrojów innych ludzi IEE wie jak zręcznie unikać konfliktów i gasić np. żartem. Lecz, kiedy powód konfliktu wyrównuje się z jego obecnymi interesami, może wdać się w spór, w takich sytuacjach działa aktywnie i zdecydowanie.</p>"+
"<p>Opis słabych funkcji:</p>"+
"<p><img src='img/ti.png' alt='Ti'> - reprezentuje \"roboczą działalność\" i zawsze oczekuje wyraźnej organizacji. Przez to należy rozumieć punktualność, jest to funkcja obowiązków, instrukcji, regulacji, hierarchii podległości, odpowiedzialności ... czyli wszystko co odstrasza IEE - każda ciężka struktura, która narzuca \"wywiązanie się z obowiązków\". Jego kreatywność nie postrzega niczego jako ustalonego z góry. Z tego powodu szczególnie ważne jest, aby znalazł pracę, w której ujawnią się jego zdolności.</p>"+
"<p>Głęboki i nietuzinkowy bieg myśli charakterystyczny dla wielu ludzi tego typu może doprowadzić ich do realizowania się w zawodzie obejmującym badania naukowe, gdzie z łatwością proponują nieoczekiwane poglądy na pojawiające się problemy. Kiepsko odpowiadają na pracę fizyczną i logiczną analizę. Wszystko co wymaga od nich wnikliwości i uporządkowania w jego dociekaniach, szybko doprowadzi go do zmęczenia. Te aspekty pracy naukowej wolą oddać innym i zamiast tego przyjąć rolę \"generatora pomysłów\". Aczkolwiek, kiedy nie zdołają znaleźć twórczej pracy, w której zawsze coś nowego może być dostrzeżone, ich uprzednia niezmożona ciekawość drastycznie słabnie.</p>"+
"<p>Po wypróbowaniu 10-15 nowych specjalizacji, może okazać się, że IEE został bez niczego, nic nie osiągnął w życiu, utracił cały swój talent. Po skończeniu koniecznych przygotowań nad nowym projektem może go rzucić, jeżeli dopostrzeże coś bardziej atrakcyjnego. Woli nie planować, ale improwizować; niebezpiecznie jest polegać na jego biznesowych zdolnościach, ponieważ po chwili może być mocno zaangażowany w coś innego.</p>"+
"<p>Nie odpowiada zbyt dobrze na klasyczne wzorce. IEE nie uznaje formalnej podległości, nie czuje pokory w stosunku do autorytetów, co może prowadzić do kłopotów. Oglądanie się na autorytety, szczególnie jeśli jego zdaniem są złe, spotyka się z ostrym zlekceważeniem ich osoby z jego strony. Dlatego zrozumiałe jest, że żądanie od niego bezwarunkowego podporządkowania się do rygorystycznej władzy jest nie na miejscu.</p>"+
"<p><img src='img/se.png' alt='Se'> - IEE zakłada, że społeczeństwo docenia odważnych, zdecydowanych i stanowczych ludzi i próbuje stworzyć takie wrażenie o swojej osobie. W pewnych kwestiach może rzeczywiście pokazywać swoją siłę woli i w pewnych sytuacjach jest zdolny do działania w presji, lecz bardzo często działanie w tych warunkach nie jest długotrwałe i jego wytrwałość okazuje się być krótkotrwała. </p>"+
"<p>IEE nie jest zainteresowany materialnym światem. Nie jest zdolny dotrzymać mu kroku i woli, aby ktoś inny przejął kontrolę nad tymi sprawami. Jeśli dochodzi do wybierania między zakupem jednego przedmiotu a drugim, potrzebuje drugiej osoby do konsultacji. Często niedbale traktuje sprawy finansowe, pieniądze interesują go tylko w sferze natychmiastowego użycia niż w terminie nabywania nowych życiowych doświadczeń.</p>"+
"<p>IEE w pracy i w domu:</p>"+
"<p>IEE nie zmierza do obejmowania kierowniczych stanowisk. Trudno jest mu kierować zespołem na zaawansowanym poziomie, gdzie konieczna jest obserwacja regulacji i krótkotrwałych obowiązków od góry do dołu, z deski do deski. Jest o wiele lepszy w pokazywaniu swoich umiejętności głowie całego zespołu. W pracy wystraczy mu rzucić okiem na problem, aby dostrzec perspektywy rozwoju w firmie i strategicznie go rozwiązać w sposób wielce pomyślny dla zespołu. Jego zdolność przekazywania nietrywialnych pomysłów może okazać się decydującym czynnikiem w działalności opartej na współzawodnictwie. Jednak studiowanie komponentów powinno zostać powierzone tym, którzy poradzą sobie z tym lepiej od niego.</p>"+
"<p>IEE również posiada użyteczną w każdej randze kierownictwa zdolność rozmieszczania kadry w sposób, który efektywnie wykorzystuje umiejętności każdego kadrowicza. Jednakże, wprowadzanie dyscypliny i ocena wykonanej pracy i jej jakości powinna zostać powierzona zastępcom.</p>"+
"<p>Z powodu jego umiejętności przewidywania nowych możliwości i ich szybkiego wykorzystywania, jest niezastąpiony w działalności biznesowej, w organizacji nowej pracy, tworzeniu akcji reklamowej, w dziennikarstwie ... w każdym kierunku zapalającym jego zapał, a nowatorstwo i oryginalność współgra z jego zdolnością zawierania kontaktów.</p>"+
"<p>W relacjach z osobami, które go pociągają, IEE ma skłonności w kierunku nowości i zmian. W życiu małżeńskim ta postawa jest rzadko dobrze odbierana przez innych. Jeżeli partner IEE nie wie jak zawsze być oryginalny i tajemniczy, jego miłość może szybko wygasnąć. Jeżeli jego partner jest stabilny, posiada cierpliwość potrzebną do zrozumienia, że każda nowa uciecha IEE przeminie tak szybko jak poprzednia. Inaczej będzie trudno uniknąć awantur i separacji. </p>"+
"<p>Ekonomiczna działalność domowa jest zupełnie jemu obca. Problemy dotyczące gospodarowania domu woli rozwiązywać z minimalnym wysiłkiem. Nie znajduje w tym przyjemności.</p>"+
"<p>Pomimo faktu, iż IEE słabo dopasowuje się do rodzinnego ideału społeczeństwa, jest zdolny przystosować się do ogółu poprzez drogę usłaną ciągłą nowością i zmiennością ... Nie jest zaskoczeniem, że nawet w starszym wieku umie oczarowywać i być oczarowanym przez innych.</p>"+
"<p>Preferencje zawodowe:</p>"+
"<p>Zdolność IEE do przewidywania nowych dróg jest niezastąpiona w biznesie, agencjach reklamowych, w organizacji nowej pracy, w dziennikarstwie ... wszędzie, gdzie jego zapał, ciekawość dla nowości, może być połączona ze zdolnością nawiązywania kontaktów. Reprezentanci tego typu mogą również pracować jako naukowcy, gdzie z łatwością sugerują niespodziewane wyjścia z problemów; część z nich z powodzeniem pracuje jako psychologowie.</p>",
EII: "<h3>Etyczno-Intuicyjny-Introwertyk EII (INFj)</h3><p>Umieszczenie świadomości w wiodącym bloku: EII postrzagają jakość swojego życia poprzez harmonię w relacjach między-ludzkich, obserwacji norm etyki, moralności i uwagi względem tradycji. Dlatego uważa za konieczne zajmowanie się doskonaleniem w sensie moralnym, odkrycie swojej duchowości i poszukiwaniu prawdziwych wartości w innych ludziach.</p>"+
"<p> Opis aktywności silnych funkcji:</p>"+
"<p>Fi - Introwertyczna etyka przesądza o tym, że EII skupia swoją uwagę na sądach dotyczących dobra i zła, moralności i demoralizacji, niewinności i niehonorowości. Dokładnie wyczuwa normy zachowania, które kierują różnymi grupami ludzi i dlatego stara się podążać za owymi normami, aby nie urazić uczuć, oraz moralności osób go otaczjących . Gdy po raz pierwszy pojawia się pośród danej grupy ludzi trzyma się z boku. Kiedy tylko określi stopień kontroli dotyczący psychologicznej atmosfery, która istnieje w grupie i tylko wtedy, gdy dostosuje się do tej atmosfery, wówczas może rozważać zostanie pełnoprawnym członkiem tej zbiorowości. </p>"+
"<p>EII często zawiera znajomości z osobami słabymi lub nieszczęśliwymi. Osoby tego pokroju służą swoim pragnieniem niesienia pomocy, oparciem i pociechą. Często INFj zdarza się, że osoby zwracają się do nich o pomoc, nie odmawiają im wysłuchując ich wyznań aż do samego końca. Próbują przyzwyczajać do pschologicznych trudności, których się doświadczyło i stara się wspierać i brać ich stronę.</p>"+
"<p>EII często łatwo jest zranić i zawsze jest emocjonalny, jednakże wszystkie swoje nieprzyjemne doświadczenia przeżywa wewnątrz siebie; dlatego te właściwości są ciężkie do zaobserwowania z zewnątrz. Czasami sprawia wrażenie opanowanej, a nawet zimnej osoby, to wrażnie jest jednak tylko pozorne. Każde zdarzenie, nawet te przez większość uznawanych za mało istotne, pozostawia w jego duszy głęboki ślad, który utrzymuje się przez długi czas. Zasadą tego typu jest tłumienie w sobie gniewu, irytacji i pragnienia zemsty. Jednym z jego swoistych przejawów obrony jest stworzenie psychicznej bariery oddzielającej go od oprawcy. W takiej sytuacji prezentuje postawę przejawiającą napięcie, chłodność, uprzejmość. INFj będzie odpowiadał na pytania pojedyńczymi wyrazami. Taki styl zachowania charakteryzujący ten typ psychologiczny jest dla niektórych ludzi trudny do poradzenia sobie z nim; woleliby aby EII krzyczał albo w jakiś inny sposób wyrażał swoje oburzenie. Dla INFj także jest trudno żyć w takim stanie. Jedank jeśli oprawca poprosi o przebaczenie i wykaże chęć zmiany zaistniałej sytuacji wtedy ta metoda obrony szybko zostanie przez EII porzucona.</p>"+
"<p>Wysoki emocjonalizm w połączeniu z racjonalnością często powoduje u EII powtarzanie na okrągło swojej roli z przeszłych wydarzeń. Ośrodek pobudzenia w jego świadomości zaciemnia inne aspekty życia, kiedy zaistnieje. INFj znajduje trudność w skupieniu się na czymś innym. Mentalnie naokrągło powraca ciągle do tego samego, może mówić o tym bez przerwy do momentu, gdy dla innych stanie się to nie do zniesienia.</p>"+
"<p>Ne - EII poszukuje prawdziwych wartości w życiu i odnajduje sens w harmonijnych relacjach z innymi ludźmi. Szczególnie ceni sobie dużą duchowość i wysoką moralność. Zwłaszcza w młodości INFj używał swojej wyobrażni w celu sformułowania pewnego moralnego ideału, który próbował osiągnąć. U podstaw tej funkcji często leży rozwój poczucia obowiązku. Dlatego najmniejsze rozbieżności w zachowaniu, oddalające od ideału, są przez EII poważnie traktowane, wewnętrznie. Opisane tendencje w kierunku własnego ideału mogą stać się tyranią. Tyrania obowiązku w swoim najbardziej ekstremalnym przejawie, może doprowadzić EII do stanu pogardy dla samego siebie. Może także przyczynić się do obwiniania innych za ich zachowanie, które nie przedstawia wspomnianej niewinności. Przegięcie tego typu, który bardzo często jest charakterystyczny dla EII w okresie ich młodości może prowadzić do problemów w dalszym życiu. Taka konfrontacja jest trudnym testem, który ciąży na nim.</p>"+
"<p>Kiedy moralne normy, które uważa za wręcz obowiązkowe są ekstremalnie wysokie i ciężkie w obyciu, może zareagować na to stopniowo rosnącym stałym poczuciem winy, który wynika z jego niemożności podołania tym normom. Z trudnością odnajduje się względem tych praw. Wszystkie porażki życiowe traktuje jako karę za swoją nieuwagę. To poczucie winy może towarzyszyć EII przez całe ich życie.</p>"+
"<p>Nadmiar wartości materialnych i sukcesy w karierze nigdy nie zastąpią INFj celu egzystencji: znalezienie swojego celu, wykorzystanie życia w pełni zanim przeminie, odkrycie swoich talentów. Dla swojego moralnego ideału chętnie zaczną korzystać z \"bloku oprawcy\". W najbardziej psychologicznie ekstremalnej sytuacji trzymają się mocno swoich ideałów. Jednak w zwykłych, codziennych zdarzeniach EII preferuje opuszczanie miejsca konfliktu, dochodząc do wniosku, że uprzejmość i niewinność są najlepszym sposobem w zaradzeniu wszelkim nieporozumieniom.</p>"+
"<p>Opis aktywności najsłabszych funkcji:</p>"+
"<p>Se - Wszystko co łączy się z przemocą, bez względu na jej formę, oddziałowuje bardzo negatywnie na EII. Efektem rozwinięcia tej funkcji u EII jest niemożność obserwowania walk i kar oraz przeżywajnie wewnątrznych reakcji na tematy dotyczące morderstwa, nawet na te serwowane przez prezenterów w TV. Obraz tego inicjuje w EII chęć zaprzestania wszystkiego. Ta reakcja może być nawet ostrzejsza jeżeli w swoim własnym życiu EII cierpieli z powodu prześladowania związanego z przemocą, zwłaszcza tyczyć się to może kar zaznanych w dzieciństwie.</p>"+
"<p>EII uważa, że każda osoba powinna dążyć do wznoszenia się co raz wyżej, ale ten rygor pozostaje nieosiągalny nawet dla niego, zwłaszcza, że jest nieadekwatny do rzeczywistego życia. Właśnie w tym ukazuje się jego wrażliwość słabego umysłu . Warto zauważyć, iż reakcje EII mogą wcale nie być powiązane z okolicznościami: może być bez uzasadnienia za silny bądź za słaby.</p>"+
"<p>EII jest bardzo wrażliwy na wszelki dominujący ton względem niego. Często nie jest zadowolnoy z pracy nad zadaniem podlegającym sile jego słabo rozwiniętej logice biznesowej. Jeśli jest zmuszany do zrobienie czegoś, może to zinterpretować jako niedocenienie jego entuzjazmu i może zwyczajnie odmówić dalszej pracy, mimo to odwołanie do jego poczucia obowiązku może utrzymać INFj w stanie stresu w pracy przez długi okres czasu.</p>"+
"<p>Tendencje w stronę osiągnięcia ideału, stała praca nad sobą, z jednej strony i problemy z emocjonlanym bólem z drugiej strony mogą prowadzić do sytuacji, w której INFj jest już sobą najnormalniej w świecie zmęczony. To znowóż często pozwala na zaistnienie zachwiania w jego systemie nerwowym. Kontakt z naturą doskonale pomaga mu w relaksacji; instynktownie dążą do osiągnięcia zdrowego trybu życia.</p>"+
"<p>Postrzeganie domowych problemów u EII często bywa niesprawne. Kupić coś adekwatne jakościowo do innych ubrań, pralnia... z tymi problemami, oraz z jeszcze innymi należy się zmieżyć. Jednak EII nigdy nie zaprzestaje marnować zbyt dużo czasu i energi na poszczególnych zadaniach. Zgodnie ze swoim zmysłem porządku nie może żyć w bałaganie, który może ciążyć nad nim; także uważa za wielki wstyd, gdy ktoś inny uświadczy w jego domu bałaganu. Periodyczny brak pieniędzy sukcesywnie \"gasi\" INFj. Problemy w gospodarstwie domowym są dla niego istotne, dlatego usiłuje oszczędzać pieniądze \"na czarną godzinę\". Słabość EII tkwi także w fakcie, że dla niego jest trudne podjęcie decyzji czy coś będzie potrzebne w przyszłości, czy też nie. Dlatego ma skłonność to przetrzymywania przez lata rzeczy, których większość ludzi już dawno by się pozbyła.</p>"+
"<p>Ti - EII stara się rozważać wszystkie działania z wyprzedzeniem. Określa konkretne priorytety dla siebie, które mają służyć realizacji planu. Takie podejście nie zawsze prowadzi do sukcesu, zwłaszcza kiedy emocjonlaizm często popycha albo odciąga go od orginalnego kierunku, którym palnował podążać. Pomimo tego próbuje planować swoje działania według okreśłnoego sytemu, w celu organizowania kolejności i to wymaga od EII dużego wysiłku.</p>"+
"<p>Próbuje pracować jak najbardziej sumiennie, EII nie zawsze potrafi pracować efektywnie. Dlatego, że spędza za dużo czasu na nieproduktywnym działaniu. Czasami rekompensuje to sobie pracą od światu do zmierzchu. Trudność sprawia mu trzymanie się dnia pracy w rozsądnej strukturze: zawsze znajdzie się coś co jest nieskończone. Konsekwencją perfekcjonizmu jest to, że czasami poświęca się na rzecz pracy. Co jest sprzeczne z jego naturą; poczucie obowiązku spycha na dalszy plan inne potrzeby INFj.</p>"+
"<p>EII w pracy i w domu:</p>"+
"<p>Jeżeli EII jest za coś odpowiedzialny, to nie tylko zaakceptuje brzemię swoich obowiązków, ale także brzemię obowiązków swoich pracowników. Bardzo mocno zamartwiają się perspektywą karygodnego błędu. Starają się wykorzystać źródła, które posiadają, aby ukończyć wyznaczoną im pracę w najlepszy sposób. Chociaż mogą wchodzić w konflikt z nierozważnymi współpracownikami albo egocentrycznymi autorytetami w miejscu pracy to poczucie obowiązku względem pracy zmusza ich do unikania konfliktowych sytuacji.</p>"+
"<p>W relacjach z podwładnymi EII woli szczerość i bezpośrednioć: znacznie częściej coś odrzuci zamiast składania niewykonlanych obietnic. Idealną sytuacją dla nich jest gdy podwładni są jednocześnie ich poplecznikami, z którymi EII może współnie pracować nad zwykłymi sprawami. Wartościuje osoby nie według tego jake stanowisko zajmują, ale w jakim stopniu spełniają jego moralne kryteria.</p>"+
"<p>Ciepłe relacje, pewność, atmosfera miłości i wzajemnego zrozumienia. To są elementy, które składają się na doskonlałe środowisko, które EII chciałby zapewnić swojej rodzinie, co zajmuje mu to dużą część życia. Na nieszczęście relacje często okazują się dalekie od ideału i z tą sytuacją EII nie radzi sobie dobrze.</p>"+
"<p>EII nie jest zdolny do oszukiwania dla własnej korzyści, nie dlatego że boi się być na tym przyłapany, ale dlatego iż przeciwstawia się to jego moralnym prawom. Nawet jeśli jego znajomości nie są zbyt dobre, będzie starał się utrzymać atmosferę życzliwości i ciepła; EII poświęci się dla stabilności swoich dzieci.</p>"
	}
	
	//set score and previous score(needed to be stored in case user wants to go back in the test) to initial values of 0
	var score = {ILE: 0, LII: 0, ESE: 0, SEI: 0, SLE: 0, LSI: 0, EIE: 0, IEI: 0, LIE: 0, ILI: 0, SEE: 0, ESI: 0, LSE: 0, SLI: 0, IEE: 0, EII: 0};
	var prevScore = {ILE: 0, LII: 0, ESE: 0, SEI: 0, SLE: 0, LSI: 0, EIE: 0, IEI: 0, LIE: 0, ILI: 0, SEE: 0, ESI: 0, LSE: 0, SLI: 0, IEE: 0, EII: 0};
	//set initial value to question index
	var questionIndex = 35;
	var questionDiv = $('#questionDiv');
	var progressText = $('#progress');
	//set initial skipped answers to 0, and limit of skipped answers to 10
	var skippedAnswers = 0;
	var maxSkippedAnswers = 10;
	
	var funcObj = {
		0: "url('img/ne.png')",
		1: "url('img/ni.png')",
		2: "url('img/se.png')",
		3: "url('img/si.png')",
		4: "url('img/te.png')",
		5: "url('img/ti.png')",
		6: "url('img/fe.png')",
		7: "url('img/fi.png')"
	};
	
	var l1 = $('#el1');
	var l2 = $('#el2');
	var l3 = $('#el3');
	var l4 = $('#el4');
	var l5 = $('#el5');
	var l6 = $('#el6');
	var l7 = $('#el7');	
	var l8 = $('#el8');	
	function setModelA(type){
		$('.logo').css({
			backgroundColor: "#fff",
		});
		switch(type){
			case "ILE":
				l1.css({backgroundImage: "url('img/ne.png')"});
				l2.css({backgroundImage: "url('img/ti.png')"});
				l3.css({backgroundImage: "url('img/fi.png')"});
				l4.css({backgroundImage: "url('img/se.png')"});
				l5.css({backgroundImage: "url('img/fe.png')"});
				l6.css({backgroundImage: "url('img/si.png')"});
				l7.css({backgroundImage: "url('img/ni.png')"});
				l8.css({backgroundImage: "url('img/te.png')"});	
				break;
			case "LII":
				l1.css({backgroundImage: "url('img/ti.png')"});
				l2.css({backgroundImage: "url('img/ne.png')"});
				l3.css({backgroundImage: "url('img/se.png')"});
				l4.css({backgroundImage: "url('img/fi.png')"});
				l5.css({backgroundImage: "url('img/si.png')"});
				l6.css({backgroundImage: "url('img/fe.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/ni.png')"});	
				break;
			case "ESE":
				l1.css({backgroundImage: "url('img/fe.png')"});
				l2.css({backgroundImage: "url('img/si.png')"});
				l3.css({backgroundImage: "url('img/ni.png')"});
				l4.css({backgroundImage: "url('img/te.png')"});
				l5.css({backgroundImage: "url('img/ne.png')"});
				l6.css({backgroundImage: "url('img/ti.png')"});
				l7.css({backgroundImage: "url('img/fi.png')"});
				l8.css({backgroundImage: "url('img/se.png')"});	
				break;
			case "SEI":
				l1.css({backgroundImage: "url('img/si.png')"});
				l2.css({backgroundImage: "url('img/fe.png')"});
				l3.css({backgroundImage: "url('img/te.png')"});
				l4.css({backgroundImage: "url('img/ni.png')"});
				l5.css({backgroundImage: "url('img/ti.png')"});
				l6.css({backgroundImage: "url('img/ne.png')"});
				l7.css({backgroundImage: "url('img/se.png')"});
				l8.css({backgroundImage: "url('img/fi.png')"});	
				break;
			case "SLE":
				l1.css({backgroundImage: "url('img/se.png')"});
				l2.css({backgroundImage: "url('img/ti.png')"});
				l3.css({backgroundImage: "url('img/fi.png')"});
				l4.css({backgroundImage: "url('img/ne.png')"});
				l5.css({backgroundImage: "url('img/fe.png')"});
				l6.css({backgroundImage: "url('img/ni.png')"});
				l7.css({backgroundImage: "url('img/si.png')"});
				l8.css({backgroundImage: "url('img/te.png')"});
				break;
			case "LSI":
				l1.css({backgroundImage: "url('img/ti.png')"});
				l2.css({backgroundImage: "url('img/se.png')"});
				l3.css({backgroundImage: "url('img/ne.png')"});
				l4.css({backgroundImage: "url('img/fi.png')"});
				l5.css({backgroundImage: "url('img/ni.png')"});
				l6.css({backgroundImage: "url('img/fe.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/si.png')"});	
				break;
			case "EIE":
				l1.css({backgroundImage: "url('img/fe.png')"});
				l2.css({backgroundImage: "url('img/ni.png')"});
				l3.css({backgroundImage: "url('img/si.png')"});
				l4.css({backgroundImage: "url('img/te.png')"});
				l5.css({backgroundImage: "url('img/se.png')"});
				l6.css({backgroundImage: "url('img/ti.png')"});
				l7.css({backgroundImage: "url('img/fi.png')"});
				l8.css({backgroundImage: "url('img/ne.png')"});	
				break;
			case "IEI":
				l1.css({backgroundImage: "url('img/ni.png')"});
				l2.css({backgroundImage: "url('img/fe.png')"});
				l3.css({backgroundImage: "url('img/te.png')"});
				l4.css({backgroundImage: "url('img/si.png')"});
				l5.css({backgroundImage: "url('img/ti.png')"});
				l6.css({backgroundImage: "url('img/se.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/fi.png')"});	
				break;
			case "LIE":
				l1.css({backgroundImage: "url('img/te.png')"});
				l2.css({backgroundImage: "url('img/ni.png')"});
				l3.css({backgroundImage: "url('img/si.png')"});
				l4.css({backgroundImage: "url('img/fe.png')"});
				l5.css({backgroundImage: "url('img/se.png')"});
				l6.css({backgroundImage: "url('img/fi.png')"});
				l7.css({backgroundImage: "url('img/ti.png')"});
				l8.css({backgroundImage: "url('img/ne.png')"});	
				break;
			case "ILI":
				l1.css({backgroundImage: "url('img/ni.png')"});
				l2.css({backgroundImage: "url('img/te.png')"});
				l3.css({backgroundImage: "url('img/fe.png')"});
				l4.css({backgroundImage: "url('img/si.png')"});
				l5.css({backgroundImage: "url('img/fi.png')"});
				l6.css({backgroundImage: "url('img/se.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/ti.png')"});	
				break;
			case "SEE":
				l1.css({backgroundImage: "url('img/se.png')"});
				l2.css({backgroundImage: "url('img/fi.png')"});
				l3.css({backgroundImage: "url('img/ti.png')"});
				l4.css({backgroundImage: "url('img/ne.png')"});
				l5.css({backgroundImage: "url('img/te.png')"});
				l6.css({backgroundImage: "url('img/ni.png')"});
				l7.css({backgroundImage: "url('img/si.png')"});
				l8.css({backgroundImage: "url('img/fe.png')"});
				break;
			case "ESI":
				l1.css({backgroundImage: "url('img/fi.png')"});
				l2.css({backgroundImage: "url('img/se.png')"});
				l3.css({backgroundImage: "url('img/ne.png')"});
				l4.css({backgroundImage: "url('img/ti.png')"});
				l5.css({backgroundImage: "url('img/ni.png')"});
				l6.css({backgroundImage: "url('img/te.png')"});
				l7.css({backgroundImage: "url('img/fe.png')"});
				l8.css({backgroundImage: "url('img/si.png')"});	
				break;
			case "LSE":
				l1.css({backgroundImage: "url('img/te.png')"});
				l2.css({backgroundImage: "url('img/si.png')"});
				l3.css({backgroundImage: "url('img/ni.png')"});
				l4.css({backgroundImage: "url('img/fe.png')"});
				l5.css({backgroundImage: "url('img/ne.png')"});
				l6.css({backgroundImage: "url('img/fi.png')"});
				l7.css({backgroundImage: "url('img/ti.png')"});
				l8.css({backgroundImage: "url('img/se.png')"});	
				break;
			case "SLI":
				l1.css({backgroundImage: "url('img/si.png')"});
				l2.css({backgroundImage: "url('img/te.png')"});
				l3.css({backgroundImage: "url('img/fe.png')"});
				l4.css({backgroundImage: "url('img/ni.png')"});
				l5.css({backgroundImage: "url('img/fi.png')"});
				l6.css({backgroundImage: "url('img/ne.png')"});
				l7.css({backgroundImage: "url('img/se.png')"});
				l8.css({backgroundImage: "url('img/ti.png')"});	
				break;
			case "IEE":
				l1.css({backgroundImage: "url('img/ne.png')"});
				l2.css({backgroundImage: "url('img/fi.png')"});
				l3.css({backgroundImage: "url('img/ti.png')"});
				l4.css({backgroundImage: "url('img/se.png')"});
				l5.css({backgroundImage: "url('img/te.png')"});
				l6.css({backgroundImage: "url('img/si.png')"});
				l7.css({backgroundImage: "url('img/ni.png')"});
				l8.css({backgroundImage: "url('img/fe.png')"});	
				break;
			case "EII":
				l1.css({backgroundImage: "url('img/fi.png')"});
				l2.css({backgroundImage: "url('img/ne.png')"});
				l3.css({backgroundImage: "url('img/se.png')"});
				l4.css({backgroundImage: "url('img/ti.png')"});
				l5.css({backgroundImage: "url('img/si.png')"});
				l6.css({backgroundImage: "url('img/te.png')"});
				l7.css({backgroundImage: "url('img/fe.png')"});
				l8.css({backgroundImage: "url('img/ni.png')"});
		}
	}
	function randomFunc(){
		var rand = Math.floor(Math.random() * 8);
		var result = funcObj[rand];
		return result;
	}	
	/**
	 * Function animates 8 square blocks right after the page loads, and then sets an interval after which every block changes it's symbol
	 */
	function logoAnimation(){
		l1.animate({right: "0px"},1500, "easeInOutCirc");
		var restOfDivs = $('.logo').not(l1);
		restOfDivs.hide();
		l2.delay(1450).slideDown();
		l3.delay(1650).slideDown();		
		l4.delay(1850).slideDown();		
		l5.delay(2050).slideDown();		
		l6.delay(2250).slideDown();		
		l7.delay(2450).slideDown();	
		l8.delay(2650).slideDown(function(){
			$('.logo').fadeOut(function(){
				$(this).css({
					backgroundImage: randomFunc(),
					"background-size": "75%",
					"background-repeat": "no-repeat",
					"background-position": "center"			
				});
			});		
			$('.logo').fadeIn();
		});
		var colorDivsInterval = setInterval(function(){
			$('.logo').fadeOut(function(){
				$(this).css({
					backgroundImage: randomFunc()
				});
			});
			$('.logo').fadeIn();
		}, 10000);
		return colorDivsInterval;
	}
	var colorDivsInterval = logoAnimation();
	
	
	/**
	 * Function counts and updates the score for the user, it also checks if the question was answered before, if so it skips it
	 */
	function countScore(){
		var radioCheckedVal = $(".radio:checked").val();
		//checks if the question was answered before, if so it skips counting
		if(questions[questionIndex-1].checked == radioCheckedVal){
			return;
		}
		
		if(questions[questionIndex-1].checked != radioCheckedVal && questions[questionIndex-1].checked != -1){
			for(val in score){
				score[val] -= prevScore[val];
				prevScore[val] = 0;
			}
		}
		questions[questionIndex-1].checked = radioCheckedVal;
		var valueQuestion = questions[questionIndex-1].score;
		var questionScoreLength = Object.keys(questions[questionIndex-1].score).length;
		for(val in prevScore){
			prevScore[val] = 0;
		}
		for(val in questions[questionIndex-1].score){
			switch(val){
				case "ILE":
					if(valueQuestion[val] == radioCheckedVal){
						score.ILE++;
						prevScore.ILE++;
					}
					break;
				case "LII":
					if(valueQuestion[val] == radioCheckedVal){
						score.LII++;
						prevScore.LII++;
					}
					break;
				case "ESE":
					if(valueQuestion[val] == radioCheckedVal){
						score.ESE++;
						prevScore.ESE++;
					}
					break;
				case "SEI":
					if(valueQuestion[val] == radioCheckedVal){
						score.SEI++;
						prevScore.SEI++;
					}
					break;
				case "SLE":
					if(valueQuestion[val] == radioCheckedVal){
						score.SLE++;
						prevScore.SLE++;
					}
					break;
				case "LSI":
					if(valueQuestion[val] == radioCheckedVal){
						score.LSI++;
						prevScore.LSI++
					}
					break;
				case "EIE":
					if(valueQuestion[val] == radioCheckedVal){
						score.EIE++;
						prevScore.EIE++;
					}
					break;
				case "IEI":
					if(valueQuestion[val] == radioCheckedVal){
						score.IEI++;
						prevScore.IEI++;
					}
					break;
				case "LIE":
					if(valueQuestion[val] == radioCheckedVal){
						score.LIE++;
						prevScore.LIE++;
					}
					break;
				case "ILI":
					if(valueQuestion[val] == radioCheckedVal){
						score.ILI++;
						prevScore.ILI++;
					}
					break;
				case "SEE":
					if(valueQuestion[val] == radioCheckedVal){
						score.SEE++;
						prevScore.SEE++;
					}
					break;
				case "ESI":
					if(valueQuestion[val] == radioCheckedVal){
						score.ESI++;
						prevScore.ESI++;
					}
					break;
				case "LSE":
					if(valueQuestion[val] == radioCheckedVal){
						score.LSE++;
						prevScore.LSE++;
					}
					break;
				case "SLI":
					if(valueQuestion[val] == radioCheckedVal){
						score.SLI++;
						prevScore.SLI++;
					}
					break;
				case "IEE":
					if(valueQuestion[val] == radioCheckedVal){
						score.IEE++;
						prevScore.IEE++;
					}
					break;
				case "EII":
					if(valueQuestion[val] == radioCheckedVal){
						score.EII++;
						prevScore.EII++;
					}
					break;
			}
		}
	}
	
	/**
	 * Function controls the progress of the test as its being done question by question and updates it
	 */
	function progressBar(){
		var progressVal = questionIndex + 1;
		var next = $('#next');
		var prev = $('#prev');
		var skippedAnswersRemaining = maxSkippedAnswers - skippedAnswers;
		if(skippedAnswersRemaining > 0){
			var pyta = "";
			switch(skippedAnswersRemaining){
				case 4:
				case 3:
				case 2:
					pyta = " pytania.";
					break;
				case 1:
					pyta = " pytanie.";
					break;
				default:
					pyta = " pytań.";
			}
			progressText.text("Pytanie " + progressVal + " z " + questions.length + ". Możesz jeszcze opuścić " + skippedAnswersRemaining + pyta);
		} else {
			progressText.text("Pytanie " + progressVal + " z " + questions.length + ".");	
		}
		if(progressVal >= questions.length){
			next.text("Sprawdź wynik");
		} else {
			next.text("Następne pytanie");
		}
		if(progressVal <= 1){
			prev.addClass('disabled').prop('disabled', true);
		} else {
			prev.removeClass('disabled').prop('disabled', false);
		}
//*****************************************WYPISANIE WYNIKÓW***********************************************		
		function viewScore(){
				$('#progressDiv').animate({
					opacity: "0"
				}, function(){
				$(this).empty();
				});
			$('#header>h1').animate({
				opacity: "0"
			}, function(){
				$('#header').empty();
				$('#sectionDiv').empty();
				var max1 = 0;
				var max2 = 0;
				var max3 = 0;
				var type1 = "";
				var type2 = "";
				var type3 = "";
				for(val in score){
					if(score[val] > max1){
						max1 = score[val];
						type1 = val;	
					}
				}
				for(val in score){
					if(val == type1){
						continue;
					}
					if(score[val] > max2){
						max2 = score[val];
						type2 = val;	
					}
				}
				for(val in score){
					if(val == type1 || val == type2){
						continue;
					}
					if(score[val] > max3){
						max3 = score[val];
						type3 = val;	
					}
				}
				var $span1 = $("<span></span>").attr("id", "type1").text(type1);
				var $span2 = $("<span></span>").attr("id", "type2").text(type2);
				var $span3 = $("<span></span>").attr("id", "type3").text(type3);
				var $spanI = $("<span></span>").text(" i ");
				var $type1 = $("<h1></h1>").addClass("score").text("Najbardziej prawdopodobny dla Ciebie typ to ").append($span1);
				var $type2 = $("<h1></h2>").addClass("score").text("Pozostałe typy do rozważenia to ").append($span2).append($spanI).append($span3);
				$('#header').append($type1);
				$('#header').append($type2);
				animateScoreLogo($type1, $type2, colorDivsInterval);
			});
			return true;
		};
		
		if(progressVal > questions.length) {
			viewScore();
			return true;
		}
		return false;
	}
	
	var skippedDiv = $('#skippedDiv');

//*****************************************************************************EKRAN WYNiKOWY
	function animateScoreLogo($type1, $type2, colorDivsInterval){
		clearInterval(colorDivsInterval);
		var logos = [l1,l2,l3,l4,l5,l6,l7,l8];
		for(var i = 0; i < logos.length; i++){
			logos[i].delay(i*100).animate({'border-width': "25px"}, function(){
			$(this).css('background-image', "none");
			
		});
		}
		
		$('#nav').animate({left: "-25%"}, 1500, "easeInOutExpo");
		l3.animate({top: "3.5em"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-7em"}, 1500, "easeOutBounce");
		});
		l4.delay(0).animate({top: "3.5em"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-7em"}, 2000, "easeOutBounce");
		});
		l5.delay(0).animate({top: "7em"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-14em"}, 2500, "easeOutBounce");
		});
		l6.delay(0).animate({top: "7em"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-14em"}, 2500, "easeOutBounce");
		});
		l7.delay(0).animate({top: "10.5em"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-21em"}, 2500, "easeOutBounce");
		});
		l8.delay(0).animate({top: "10.5em"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-21em"}, 2500, "easeOutBounce", function(){
				$('#header').animate({
					height: "12em"
				}, 1500, "easeInOutExpo");
				$('#nav').animate({top: "10em"}, 1500, "easeInOutExpo");
				$type1.animate({opacity: "1"}, 400);
				$type2.animate({opacity: "1"}, 400);
				$('#nav>h1').text("");
				var $anchor = $("<a></a>").attr({
					href: "http://socjonika.pl/#Budowa_psychiki",
					target: "_blank",
					title: "Budowa psychiki wytłumaczona na podstawie Modelu A"
				}).text("Model A");
				$('#nav>h1').append($anchor);
				$('#nav>h1').animate({opacity: "1"}, 400);
				var $descriptionDiv = $("<div></div>").attr("id", "descriptionDiv");
				$('#sectionDiv').append($descriptionDiv);
				var description;
				if($type1.text().indexOf('ILE') > -1){
						description = descriptions.ILE;
						setModelA("ILE");
				} else if($type1.text().indexOf('LII') > -1){
						description = descriptions.LII;
						setModelA("LII");						
				} else if($type1.text().indexOf('ESE') > -1){
						description = descriptions.ESE;
						setModelA("ESE");
				} else if($type1.text().indexOf('SEI') > -1){
						description = descriptions.SEI;
						setModelA("SEI");
				} else if($type1.text().indexOf('SLE') > -1){
						description = descriptions.SLE;
						setModelA("SLE");
				} else if($type1.text().indexOf('LSI') > -1){
						description = descriptions.LSI;
						setModelA("LSI");
				} else if($type1.text().indexOf('EIE') > -1){
						description = descriptions.EIE;
						setModelA("EIE");
				} else if($type1.text().indexOf('IEI') > -1){
						description = descriptions.IEI;
						setModelA("IEI");
				} else if($type1.text().indexOf('LIE') > -1){
						description = descriptions.LIE;
						setModelA("LIE");
				} else if($type1.text().indexOf('ILI') > -1){
						description = descriptions.ILI;
						setModelA("ILI");
				} else if($type1.text().indexOf('SEE') > -1){
						description = descriptions.SEE;
						setModelA("SEE");
				} else if($type1.text().indexOf('ESI') > -1){
						description = descriptions.ESI;
						setModelA("ESI");
				} else if($type1.text().indexOf('LSE') > -1){
						description = descriptions.LSE;
						setModelA("LSE");
				} else if($type1.text().indexOf('SLI') > -1){
						description = descriptions.SLI;
						setModelA("SLI");
				} else if($type1.text().indexOf('IEE') > -1){
						description = descriptions.IEE;
						setModelA("IEE");
				} else if($type1.text().indexOf('EII') > -1){
						description = descriptions.EII;
						setModelA("EII");
				}  
				$('.logo').animate({'border-width': "2px"});
				$('#descriptionDiv').append(description).animate({opacity: "1"}, 400);
				$('#type1, #type2, #type3').click(function(){
					var type = $(this).text();
					$('.logo').animate({'border-width': "25px"}, 200);
					$('#descriptionDiv').fadeOut(200, function(){
						description = descriptions[type];
						$('#descriptionDiv').empty();
						$('#descriptionDiv').append(description);
						setModelA(type);
					});
					$('#descriptionDiv').fadeIn(200);
					$('.logo').animate({'border-width': "2px"}, 200);
				});
			});
		});
	}
	/**
	 * Function goes to the next question
	 */
	function nextQuestion(){
		countScore();
		if(questionIndex < questions.length && questions[questionIndex-1].skipped == true){
			
			var id = questionIndex;
			var skippedId = "skipped" + id;
			$("#"+skippedId).slideUp();
			skippedAnswers--;
			if(skippedAnswers == 0){
				$('#pSkippedQuesitons').slideUp(400, function(){
						skippedDiv.empty();
				});
			}
			if(skippedAnswers <= maxSkippedAnswers-1 && questions[questionIndex].skipped == false){
				$('#skip').removeClass('disabled').prop('disabled', false);
			}
		}
		var questionIndexTemp = questionIndex-1;
		while(questions[questionIndexTemp] && questions[questionIndexTemp].checked != -1){
			questionIndexTemp++;
			questionIndex = questionIndexTemp;
		}
		questionDiv.animate({
			opacity: "0"
		}, 'fast', askQuestion);
	}

	/**
	 * Function goes to the previous question
	 */
	function prevQuestion(){
		questionIndex -= 2;
		questionDiv.animate({
			opacity: "0"
		}, 'fast', askQuestion);
		questionDiv.animate({
			opacity: "1"
		}, 'fast');
	}
	
	//***************************************************************	ZADANIE PYTANIE	
	function askQuestion(){
		$('.radio').attr("checked", "");
		$('#questionList div').removeClass('questionChecked');
		$('.radio').first().prop({
			checked: "true"
		});
		$('#firstDiv').addClass('questionChecked');
		var end = progressBar();
		if(end){
			questionIndex++;
			return;
		}
		if(questions[questionIndex].skipped == true){
			$('#skip').addClass('disabled').prop('disabled', true);
		}
		$('#questionHeading').text(questions[questionIndex].question);
		$('.question').hide();
		$('label').each(function(index){
			if(index <= questions[questionIndex].choices.length){
				$(this).text(questions[questionIndex].choices[index]);
			}
		});
		$('.question').each(function(index){
			if(index < questions[questionIndex].choices.length){
				$(this).show();
			}
		});
		questionIndex++;
		questionDiv.animate({
			opacity: "1"
		}, 'fast');
	}

	//*******************************************************************************POCZĄTEK

	$('#content').hide();
	$('#content').fadeIn();
	askQuestion();
	$('input:checked').parent().addClass('questionChecked');
	$('input:not(:checked)').parent().removeClass('questionChecked');
	$('.question').click(function(){
		$(this).addClass('questionChecked');
		$('.question').not(this).removeClass('questionChecked');
		$(this).children().prop("checked", true);
	})
	$('#next').click(nextQuestion);
	$('#prev').click(prevQuestion);
	$('#skip').click(function(){
		skippedAnswers++;
		if(skippedAnswers > maxSkippedAnswers-1){
			$('#skip').addClass('disabled').prop('disabled', true);
		}
		questionDiv.animate({
			opacity: "0"
		}, 'fast', askQuestion);

		questions[questionIndex-1].skipped = true;
		if(skippedDiv.is(':empty')){
			var $pSkippedQuesitons = $("<p></p>").addClass('skippedQuestion').text("Pominięte pytania").hide();
			skippedDiv.append($pSkippedQuesitons);
			$pSkippedQuesitons.slideDown();
		}
		if($('#skipped'+questionIndex)){
			var $p = $("<p id=\"skipped"+ questionIndex + "\" class='skippedQuestion'>" + questionIndex + ": " + questions[questionIndex-1].question + "</p>").hide();
			skippedDiv.append($p);

			$p.slideDown();
		}
		
		$p.click(function(){	
			var skippedNumber = parseInt($(this).text());
			questionDiv.animate({
				opacity: "0"
			}, 'fast', function(){
				questionIndex = skippedNumber-1;
				if(questions[questionIndex].skipped == true){
					$('#skip').addClass('disabled').prop('disabled', true);
				} else {
					$('#skip').removeClass('disabled').prop('disabled', false);
				}	
				progressBar();
				$('h2').text(questions[skippedNumber-1].question);
				var label = $('label');
				label.first().text(questions[skippedNumber-1].choices[0]);
				label.last().text(questions[skippedNumber-1].choices[1]);
				questionIndex++;
			});
			questionDiv.animate({
				opacity: "1"
			}, 'fast');

		});
	});
});