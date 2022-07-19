import React from "react";
import "./LegalPage.scss";

const LegalPage = () => {
  return (
    <div className="legal-container">
      <div className="identite-container">
        <h2>IDENTITÉ</h2>
        <ul>
          <li>Nom du site web : Sophia</li>
          <li>Adresse: 44 rue Alphonse Penaud 75020 Paris </li>
          <li>
            Propriétaire, animation, conception et réalisation : Uriel Sautron,
            Yohan Durand, Olivier Terral, Eric Vieira
          </li>
          <li>Responsable de publication : Yvens Belaston</li>
          <li>Hébergement : Vercel</li>
        </ul>
      </div>

      <div className="conditions-container">
        <h2>CONDITIONS D’UTILISATION</h2>
        <p>
          L’utilisation du présent site implique l’acceptation pleine et entière
          des conditions générales d’utilisation décrites ci-après. Ces
          conditions d’utilisation sont susceptibles d’être modifiées ou
          complétées à tout moment.
        </p>
      </div>

      <div className="informations-container">
        <h2>INFORMATIONS</h2>
        <p>
          Les informations et documents du site sont présentés à titre
          indicatif, sans de caractère exhaustif, et ne peuvent engager la
          responsabilité du propriétaire du site. <br />
          <br />
          Le propriétaire du site ne peut être tenu responsable des dommages
          directs et indirects consécutifs à l’accès au site.
        </p>
      </div>

      <div className="interactivite-container">
        <h2>INTERACTIVITÉ</h2>
        <p>
          Les utilisateurs du site peuvent y déposer du contenu, apparaissant
          sur le site dans des espaces dédiés (notamment via les commentaires).
          Le contenu déposé reste sous la responsabilité de leurs auteurs, qui
          en assument pleinement l’entière responsabilité juridique. <br />
          <br />
          Le propriétaire du site se réserve néanmoins le droit de retirer sans
          préavis et sans justification tout contenu déposé par les utilisateurs
          qui ne satisferait pas à la charte déontologique du site ou à la
          législation en vigueur.
        </p>
      </div>

      <div className="propriete-container">
        <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
        <p>
          Sauf mention contraire, tous les éléments accessibles sur le site
          (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
          restent la propriété exclusive de leurs auteurs, en ce qui concerne
          les droits de propriété intellectuelle ou les droits d’usage.1 <br />
          <br />
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable de l’auteur.23 <br />
          <br />
          Toute exploitation non autorisée du site ou de l’un quelconque des
          éléments qu’il contient est considérée comme constitutive d’une
          contrefaçon et passible de poursuites.4 <br />
          <br />
          Les marques et logos reproduits sur le site sont déposés par les
          sociétés qui en sont propriétaires.
        </p>
      </div>

      <div className="liens-container">
        <h2>LIENS</h2>
        <h3>Liens sortants</h3>
        <p>
          Le propriétaire du site décline toute responsabilité et n’est pas
          engagé par le référencement via des liens hypertextes, de ressources
          tierces présentes sur le réseau Internet, tant en ce qui concerne leur
          contenu que leur pertinence.
        </p>
        <h3>Liens entrants</h3>
        <p>
          Le propriétaire du site autorise les liens hypertextes vers l’une des
          pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre
          et soient présentés de manière non équivoque afin d’éviter :
        </p>
        <ul>
          <li>
            tout risque de confusion entre le site citant et le propriétaire du
            site
          </li>
          <li>
            ainsi que toute présentation tendancieuse, ou contraire aux lois en
            vigueur.
          </li>
        </ul>
        <p>
          Le propriétaire du site se réserve le droit de demander la suppression
          d’un lien s’il estime que le site source ne respecte pas les règles
          ainsi définies.
        </p>
      </div>

      <div className="confidentialite-container">
        <h2>CONFIDENTIALITÉ</h2>
        <p>
          Tout utilisateur dispose d’un droit d’accès, de rectification et
          d’opposition aux données personnelles le concernant, en effectuant sa
          demande écrite et signée, accompagnée d’une preuve d’identité.5678
          <br />
          <br />
          Le site ne recueille pas d’informations personnelles, et n’est pas
          assujetti à déclaration à la CNIL. 9
        </p>
      </div>

      <div className="credits-container">
        <h2>CRÉDITS</h2>
        <p>crédits photo, icones, etc. </p>
      </div>

      <div className="mentions-container">
        <p>
          Mentions légales fournies par WebExpress – Version 1.7 – Utilisation
          libre sous Licence Creative Commons CC BY-NC-ND 3.0 FR /
          creativecommons.org.
        </p>

        <ol>
          <li>
            Articles L111-1 et suivants du Code de la Propriété Intellectuelle
            du 1er juillet 1992
          </li>
          <li>Article 41 de la loi du 11 mars 1957</li>
          <li>
            Article L. 226-13 du Code pénal et la Directive Européenne du 24
            octobre 1995
          </li>
          <li>
            Articles L.335-2 et suivants du Code de Propriété Intellectuelle
          </li>
          <li>
            Loi n° 78-87 du 6 janvier 1978, modifiée par la loi n° 2004-801 du 6
            août 2004, relative à l’informatique, aux fichiers et aux libertés
          </li>
          <li>
            Articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à
            l’informatique, aux fichiers et aux libertés
          </li>
          <li>
            Loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars
            1996 relative à la protection juridique des bases de données
          </li>
          <li>Loi n° 2004-801 du 6 août 2004</li>
          <li>
            Article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance
            dans l’économie numérique
          </li>
        </ol>
      </div>
    </div>
  );
};

export default LegalPage;
