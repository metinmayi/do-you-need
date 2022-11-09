import arcaneIntellect from "../../../../assets/images/arcaneIntellect.jpg";
import battleShout from "../../../../assets/images/battleShout.jpg";
import bloodLust from "../../../..//assets/images/bloodLust.jpg";
import chaosBrand from "../../../../assets/images/chaosBrand.jpg";
import mysticTouch from "../../../../assets/images/mysticTouch.jpg";
import powerWordFortitude from "../../../..//assets/images/powerWordFortitude.jpg";
import { StyledWrapper } from "./StyledWrapper";
import { StyledImage } from "./StyledImage";
import { useAppSelector } from "../../../../customHooks/useAppSelector";

export const RaidBuffs: React.FC = () => {
  // Starting values
  let isArcaneIntellectActive = false;
  let isBattleShoutActive = false;
  let isBloodLustActive = false;
  let isChaosBrandActive = false;
  let isMysticTouchActive = false;
  let isPowerWordFortitudActive = false;

  const roster = useAppSelector((state) => state.rosterReducer.roster);
  for (const upgrade of roster) {
    if (!upgrade.selected) {
      continue;
    }

    if (upgrade.class === "mage") {
      isArcaneIntellectActive = true;
      isBloodLustActive = true;
      continue;
    }

    if (upgrade.class === "warrior") {
      isBattleShoutActive = true;
      continue;
    }

    if (upgrade.class === "shaman" || upgrade.class === "hunter") {
      isBloodLustActive = true;
      continue;
    }

    if (upgrade.class === "demon hunter") {
      isChaosBrandActive = true;
      continue;
    }

    if (upgrade.class === "monk") {
      isMysticTouchActive = true;
      continue;
    }

    if (upgrade.class === "priest") {
      isPowerWordFortitudActive = true;
      continue;
    }
  }

  return (
    <StyledWrapper>
      <StyledImage
        src={arcaneIntellect}
        active={isArcaneIntellectActive}
        title="Arcane Intellect"
        alt="Arcane Intellect"
      />
      <StyledImage
        src={battleShout}
        active={isBattleShoutActive}
        title="Battle Shout"
        alt="Battle Shout"
      />
      <StyledImage
        src={bloodLust}
        active={isBloodLustActive}
        title="Bloodlust"
        alt="Bloodlust"
      />
      <StyledImage
        src={chaosBrand}
        active={isChaosBrandActive}
        title="Chaos Brand"
        alt="Chaos Brand"
      />
      <StyledImage
        src={mysticTouch}
        active={isMysticTouchActive}
        title="Mystic Touch"
        alt="Mystic Touch"
      />
      <StyledImage
        src={powerWordFortitude}
        active={isPowerWordFortitudActive}
        title="Power Word: Fortitude"
        alt="Power Word: Fortitude"
      />
    </StyledWrapper>
  );
};
