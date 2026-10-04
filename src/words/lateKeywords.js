const lateKeywords = [
	// =========================
	// English - explicit lateness
	// =========================
	"running late",
	"running a little late",
	"running a bit late",
	"running very late",
	"running really late",
	"running behind",
	"running behind schedule",
	"behind schedule",
	"going to be late",
	"gonna be late",
	"will be late",
	"i'm late",
	"im late",
	"i am late",
	"i'll be late",
	"ill be late",
	"i will be late",
	"arriving late",
	"arrive late",
	"arriving a little late",
	"arriving a bit late",
	"going to arrive late",
	"going to arrive a little late",
	"be there late",
	"get there late",
	"getting there late",
	"a little late",
	"a bit late",
	"slightly late",

	// Explicitly won't arrive on time
	"won't make it",
	"wont make it",
	"won't make it on time",
	"wont make it on time",
	"can't make it",
	"cant make it",
	"can't make it on time",
	"cant make it on time",
	"cannot make it on time",
	"not going to make it",
	"not gonna make it",

	// Explicit delay
	"i'm delayed",
	"im delayed",
	"i am delayed",
	"i'm running behind",
	"im running behind",
	"i am running behind",
	"delayed",
	"tardy",
	"overdue",

	// Traffic / being held up
	"held up",
	"stuck in traffic",
	"caught in traffic",
	"delayed by traffic",
	"delayed because of traffic",
	"traffic jam",
	"stuck on the road",
	"stuck on my way",
	"stuck on the way",

	// Time taking longer
	"taking longer than expected",
	"taking longer than planned",

	// =========================
	// Norwegian - explicit lateness
	// =========================
	"jeg er sen",
	"jeg er sein",
	"er sen",
	"er sein",
	"blir sen",
	"blir sein",
	"kommer sent",
	"kommer seint",

	"jeg er forsinket",
	"jeg er forsinka",
	"er forsinket",
	"er forsinka",
	"blir forsinket",
	"blir forsinka",
	"kommer forsinket",
	"kommer forsinka",

	"kommer ikke i tide",
	"kommer ikke tidsnok",
	"ikke i tide",
	"ikke tidsnok",

	"rekker ikke",
	"rekker det ikke",
	"rekker ikke fram",
	"rekker ikke frem",
	"rekker ikke i tide",
	"rekker ikke tidsnok",

	// Train / bus
	"rekker ikke toget",
	"rekker ikke bussen",

	// Traffic causing delay
	"sitter fast i kø",
	"sitter fast i trafikken",
	"står fast i kø",
	"står fast i trafikken",
	"fast i kø",
	"fast i trafikken",

	"trafikken står",
	"mye trafikk",
	"mye kø",
	"tung trafikk",
	"trafikkork",

	"på grunn av trafikken",
	"på grunn av kø",
	"forsinket på grunn av trafikk",
	"forsinka på grunn av trafikk",

	// Mild lateness
	"blir litt sen",
	"blir litt sein",
	"blir litt forsinket",
	"blir litt forsinka",
	"er litt sen",
	"er litt sein",
	"kommer litt sent",
	"kommer litt seint",
	"kommer litt forsinket",
	"kommer litt forsinka",

	"blir veldig sen",
	"blir veldig sein",
	"blir ganske sen",
	"blir ganske sein",

	"kommer senere",
	"kommer litt senere",
	"kommer senere enn planlagt",

	"forsinket i dag",
	"forsinka i dag",

	"på vei, men forsinket",
	"på vei, men forsinka",
	"på vei og blir sen",
	"på vei og blir sein",

	// =========================
	// Norwegian - Nynorsk
	// =========================
	"eg er sein",
	"eg er sen",
	"eg blir sein",
	"eg blir sen",
	"eg kjem seint",
	"eg kjem sent",

	"eg kjem ikkje i tide",
	"eg kjem ikkje tidsnok",
	"eg rekk ikkje",
	"eg rekk det ikkje",
	"eg rekk ikkje fram",
	"eg rekk ikkje frem",
	"eg rekk ikkje i tide",

	"kjem seint",
	"kjem sent",
	"kjem ikkje i tide",
	"kjem ikkje tidsnok",
	"rekk ikkje",
	"rekk det ikkje",
	"rekk ikkje fram",
	"rekk ikkje frem",
	"rekk ikkje i tide",

	"ikkje i tide",
	"ikkje tidsnok",

	"forseinka",
	"forseinking",

	"sit fast i kø",
	"sit fast i trafikken",

	// =========================
	// Trøndersk
	// =========================
	"æ e sen",
	"æ e sein",
	"æ e forsinka",
	"æ e forsinket",

	"æ blir sen",
	"æ blir sein",
	"æ blir forsinka",
	"æ blir forsinket",

	"æ kjem seint",
	"æ kjem sent",
	"æ kommer seint",
	"æ kommer sent",

	"æ rekker itj",
	"æ rekk itj",
	"æ rekker ikke",
	"æ rekk ikke",

	"æ kjem ikke",
	"æ kommer ikke",

	"æ kjem itj i tide",
	"æ rekker itj i tide",

	"blir itj å rekke",
	"kjem itj fram",
	"kommer itj fram",
	"rekker det itj",
	"rekk det itj",

	"sitt fast i kø",
	"sitt fast i trafikken",
	"står fast i kø",
	"står fast i trafikken",

	"e litt sen",
	"e litt sein",
	"e litt forsinka",

	"blir litt sen",
	"blir litt sein",
	"blir litt forsinka",

	"kjem litt seint",
	"kommer litt seint",
	"kjem litt forsinka",
	"kommer litt forsinka",

	"æ e på vei, men",
	"æ blir litt sen",
	"æ blir litt sein",
	"æ blir litt forsinka",

	// =========================
	// General Norwegian informal
	// =========================
	"seint ute",
	"sent ute",
	"litt seint",
	"litt sent",
	"veldig seint",
	"veldig sent",
	"ganske seint",
	"ganske sent",

	"kommer seint",
	"kommer sent",
	"blir seint",
	"blir sent",

	"er seint ute",
	"er sent ute",

	"blir forsinka",
	"kommer forsinka",
	"litt forsinka",
	"veldig forsinka",

	"rekker det ikke",
	"rekker ikke",
	"rekker det ikke i tide",
	"rekker ikke i tide",

	"kommer ikke tidsnok",
	"ikke tidsnok",
	"ikke i tide",

	// Traffic / delay
	"sitter fast",
	"sitt fast",
	"står fast",
	"fast i kø",
	"fast i trafikken",

	"kø på veien",
	"kø i trafikken",
	"mye kø",
	"masse kø",
	"mye trafikk",
	"masse trafikk",

	"trafikken går tregt",
	"trafikken går sakte",

	"tar lengre tid",
	"tar lenger tid",
	"tar litt lengre tid",
	"tar litt lenger tid",
	"tar lengre tid enn forventet",
	"tar lenger tid enn forventet",

	"på vei, blir sen",
	"på vei, blir sein",
	"på vei, men sen",
	"på vei, men sein",
	"på vei, men forsinka",
];

module.exports = {lateKeywords};
