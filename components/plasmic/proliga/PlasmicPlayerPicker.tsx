// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: FmVyQ1WB4e_T

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicPlayerPicker.module.css"; // plasmic-import: FmVyQ1WB4e_T/css

createPlasmicElementProxy;

export type PlasmicPlayerPicker__VariantMembers = {};
export type PlasmicPlayerPicker__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlayerPicker__VariantsArgs;
export const PlasmicPlayerPicker__VariantProps = new Array<VariantPropType>();

export type PlasmicPlayerPicker__ArgsType = {
  name?: string;
  position?: string;
  buttonVisibility?: string;
  onclickPlus?: (event: any) => void;
  onclickMinus?: (event: any) => void;
  clubName?: string;
  price?: number;
  point?: number;
};
type ArgPropType = keyof PlasmicPlayerPicker__ArgsType;
export const PlasmicPlayerPicker__ArgProps = new Array<ArgPropType>(
  "name",
  "position",
  "buttonVisibility",
  "onclickPlus",
  "onclickMinus",
  "clubName",
  "price",
  "point"
);

export type PlasmicPlayerPicker__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultPlayerPickerProps {
  name?: string;
  position?: string;
  buttonVisibility?: string;
  onclickPlus?: (event: any) => void;
  onclickMinus?: (event: any) => void;
  clubName?: string;
  price?: number;
  point?: number;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlayerPicker__RenderFunc(props: {
  variants: PlasmicPlayerPicker__VariantsArgs;
  args: PlasmicPlayerPicker__ArgsType;
  overrides: PlasmicPlayerPicker__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          name: "Player",
          position: "DEF",
          clubName: "RealMadrid",
          price: 9,
          point: 88
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__vkwbp
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.name;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Player";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___7Pmh5
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.position;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___2PJjK
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.clubName;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__npfZv)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"16px"}
        loading={"lazy"}
        src={{
          src: "/plasmic/proliga/images/pngtreeEuroSymbolCurrencyPngImage3974231Png2.png",
          fullWidth: 512,
          fullHeight: 512,
          aspectRatio: undefined
        }}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__scVzY
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.price;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__sWvEe
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return "Ochko";
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__ibl8M
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.point;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      {(() => {
        try {
          return $props.buttonVisibility === undefined;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__xghAn)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"32px"}
          loading={"lazy"}
          onClick={args.onclickPlus}
          src={{
            src: "/plasmic/proliga/images/plus33Svg.svg",
            fullWidth: 1024,
            fullHeight: 1024,
            aspectRatio: 1
          }}
        />
      ) : null}
      {(() => {
        try {
          return $props.buttonVisibility != undefined;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__gc0Y)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"32px"}
          loading={"lazy"}
          onClick={args.onclickMinus}
          src={{
            src: "/plasmic/proliga/images/redXLineIconsvg.svg",
            fullWidth: 122.88,
            fullHeight: 122.879,
            aspectRatio: 1.000008
          }}
        />
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlayerPicker__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlayerPicker__VariantsArgs;
    args?: PlasmicPlayerPicker__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlayerPicker__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlayerPicker__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPlayerPicker__ArgProps,
          internalVariantPropNames: PlasmicPlayerPicker__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlayerPicker__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlayerPicker";
  } else {
    func.displayName = `PlasmicPlayerPicker.${nodeName}`;
  }
  return func;
}

export const PlasmicPlayerPicker = Object.assign(
  // Top-level PlasmicPlayerPicker renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPlayerPicker
    internalVariantProps: PlasmicPlayerPicker__VariantProps,
    internalArgProps: PlasmicPlayerPicker__ArgProps
  }
);

export default PlasmicPlayerPicker;
/* prettier-ignore-end */
