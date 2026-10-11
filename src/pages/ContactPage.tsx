import React, { useState } from 'react';
import { STORE_CONTACT, CATEGORIES } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactPageProps {
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    categoryInterest: initialSubject || 'fruits-secs',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Veuillez renseigner votre nom complet.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Le numéro de téléphone est requis pour vous recontacter.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Veuillez saisir un numéro valide (ex: 51 308 083).';
    }
    if (!formData.email.trim()) {
      errs.email = "L'adresse email est requise.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Format d'email invalide.";
    }
    if (!formData.message.trim()) {
      errs.message = 'Merci de préciser votre demande ou les produits souhaités.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        categoryInterest: 'fruits-secs',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#881326] bg-[#881326]/10 px-3 py-1 rounded-full">
            Contact & Renseignements
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-3 tracking-tight">
            CONTACTEZ MOKA SHOP
          </h1>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
            Vous avez une question sur nos fruits secs, nos produits du quotidien ou la livraison à Sfax et en Tunisie ? Remplissez ce formulaire pour recevoir une réponse rapide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Formal Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#3D251E] text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#2D1B15] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#881326]/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

              <h2 className="font-display text-2xl font-bold tracking-tight mb-2 text-[#FEF08A]">
                NOS COORDONNÉES
              </h2>
              <p className="text-stone-300 text-sm mb-8 leading-relaxed">
                Notre équipe est à votre disposition pour vous conseiller et préparer vos commandes dans les meilleures conditions.
              </p>

              <div className="space-y-6">
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Téléphone direct
                    </span>
                    <a
                      href={STORE_CONTACT.phoneCallUrl}
                      className="text-lg font-bold text-white hover:text-amber-300 transition-colors inline-block mt-0.5"
                    >
                      {STORE_CONTACT.phoneFormatted}
                    </a>
                    <span className="block text-xs text-stone-400 mt-0.5">
                      Numéro local : {STORE_CONTACT.phone}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Email de contact
                    </span>
                    <a
                      href={`mailto:${STORE_CONTACT.email}`}
                      className="text-base font-semibold text-white hover:text-amber-300 transition-colors break-all inline-block mt-0.5"
                    >
                      {STORE_CONTACT.email}
                    </a>
                    <span className="block text-xs text-stone-400 mt-0.5">
                      Boîte de réception officielle MOKA
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Localisation
                    </span>
                    <p className="text-base font-semibold text-white mt-0.5">
                      Tunisie, Sfax
                    </p>
                    <p className="text-xs text-stone-300 mt-0.5">
                      Distribution & livraisons sur tout le Grand Sfax et expéditions en Tunisie.
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Horaires d’assistance
                    </span>
                    <p className="text-sm text-stone-200 mt-0.5">
                      {STORE_CONTACT.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-8 border-t border-white/15">
                <a
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-bold shadow-md transition-all group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Écrire directement sur WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Reassurance Card */}
            <div className="bg-[#EBE2D5] rounded-2xl p-6 border border-[#DDD3C4] flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#881326] shrink-0" />
              <div className="text-xs text-stone-700">
                <p className="font-bold text-stone-900 text-sm">Engagement Réponse Rapide</p>
                <p className="mt-0.5">
                  Toutes les demandes reçues via le formulaire sont traitées avec soin sous quelques heures par notre équipe à Sfax.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E8DEC8]">
              {isSubmitted && submittedData ? (
                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-stone-900">
                    DEMANDE ENVOYÉE AVEC SUCCÈS !
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                    Merci <span className="font-semibold text-stone-900">{submittedData.fullName}</span>. Votre message a bien été transmis à <span className="font-semibold text-[#881326]">{STORE_CONTACT.email}</span>.
                  </p>

                  <div className="my-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-left text-xs max-w-md mx-auto space-y-1.5 text-stone-700">
                    <p><span className="font-semibold">Téléphone de rappel :</span> {submittedData.phone}</p>
                    <p><span className="font-semibold">Email :</span> {submittedData.email}</p>
                    <p><span className="font-semibold">Rayon concerné :</span> {CATEGORIES.find(c => c.id === submittedData.categoryInterest)?.name || submittedData.categoryInterest}</p>
                    <p className="italic text-stone-500 pt-1 border-t border-stone-200">"{submittedData.message}"</p>
                  </div>

                  <p className="text-xs text-stone-500">
                    Notre équipe MOKA Shop vous recontactera très rapidement au <strong>{submittedData.phone}</strong>.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-[#881326] text-white rounded-xl text-xs font-bold tracking-tight hover:bg-[#720E1E] transition-colors cursor-pointer"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-stone-900 tracking-tight">
                      FORMULAIRE DE CONTACT
                    </h2>
                    <p className="text-stone-500 text-xs mt-1">
                      Tous les champs marqués d’une astérisque (*) sont requis.
                    </p>
                  </div>

                  {/* Nom complet */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Ayoub Elloumi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2]/60 focus:bg-white transition-all outline-hidden ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-stone-300 focus:border-[#881326] focus:ring-2 focus:ring-red-100'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Numéro de téléphone & Email en 2 colonnes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        placeholder="Ex: 51 308 083"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2]/60 focus:bg-white transition-all outline-hidden ${
                          errors.phone
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-stone-300 focus:border-[#881326] focus:ring-2 focus:ring-red-100'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Adresse E-mail *
                      </label>
                      <input
                        type="email"
                        placeholder="votre-email@exemple.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2]/60 focus:bg-white transition-all outline-hidden ${
                          errors.email
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-stone-300 focus:border-[#881326] focus:ring-2 focus:ring-red-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Rayon ou type de demande */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Rayon ou objet de votre demande
                    </label>
                    <select
                      value={formData.categoryInterest}
                      onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-[#FAF7F2]/60 focus:bg-white text-sm text-stone-800 focus:border-[#881326] focus:ring-2 focus:ring-red-100 outline-hidden transition-all cursor-pointer"
                    >
                      <option value="fruits-secs">Fruits Secs & Graines (Amandes, Pistaches, Dattes...)</option>
                      <option value="epicerie">Alimentation & Épicerie (Huile d'olive, Pâtes, Sauces...)</option>
                      <option value="boissons">Boissons & Gazouz tunisiens</option>
                      <option value="biscuits">Snacks, Biscuits & Goûters</option>
                      <option value="hygiene">Hygiène & Entretien de la maison</option>
                      <option value="commande-panier">Commande globale de courses / Panier sur mesure</option>
                      <option value="partenariat-pro">Demande professionnelle / Commande en gros</option>
                      <option value="autre">Autre question ou renseignement</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Votre message ou liste de produits *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Précisez votre demande, vos quantités souhaitées ou votre zone de livraison à Sfax ou en Tunisie..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2]/60 focus:bg-white transition-all outline-hidden resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-stone-300 focus:border-[#881326] focus:ring-2 focus:ring-red-100'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#881326] hover:bg-[#720E1E] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmission en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande à MOKA Shop</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Réception directe par l'équipe MOKA à Sfax ({STORE_CONTACT.email})</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
