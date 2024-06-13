// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: HCDyn0G4nu0e

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicChampionships.module.css"; // plasmic-import: HCDyn0G4nu0e/css

createPlasmicElementProxy;

export type PlasmicChampionships__VariantMembers = {};
export type PlasmicChampionships__VariantsArgs = {};
type VariantPropType = keyof PlasmicChampionships__VariantsArgs;
export const PlasmicChampionships__VariantProps = new Array<VariantPropType>();

export type PlasmicChampionships__ArgsType = {};
type ArgPropType = keyof PlasmicChampionships__ArgsType;
export const PlasmicChampionships__ArgProps = new Array<ArgPropType>();

export type PlasmicChampionships__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  h1?: Flex__<"h1">;
  freeBox?: Flex__<"div">;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultChampionshipsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChampionships__RenderFunc(props: {
  variants: PlasmicChampionships__VariantsArgs;
  args: PlasmicChampionships__ArgsType;
  overrides: PlasmicChampionships__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "currentChampionship",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    team: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "953bfba6-6599-4384-99b8-a2fe13174a9a",
        userArgs: {
          query: [$state.currentChampionship]
        },
        cacheKey: `plasmic.$.953bfba6-6599-4384-99b8-a2fe13174a9a.$.`,
        invalidatedKeys: null,
        roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
      };
    }),
    compotetion2: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "d7b11bb5-83ca-4515-854e-a015b6aeb185",
        userArgs: {},
        cacheKey: `plasmic.$.d7b11bb5-83ca-4515-854e-a015b6aeb185.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Rmrqs5Mzp6I()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
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
        <Navbar
          data-plasmic-name={"navbar"}
          data-plasmic-override={overrides.navbar}
          className={classNames("__wab_instance", sty.navbar)}
        />

        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1
          )}
        >
          {"Choose competetion"}
        </h1>
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns)}
          >
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $queries.compotetion2.data.response;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <Stack__
                  as={"div"}
                  data-plasmic-name={"column"}
                  data-plasmic-override={overrides.column}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column)}
                  key={currentIndex}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToTeam"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: `/competition/${(() => {
                              try {
                                return currentItem.id;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}`
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToTeam"] != null &&
                      typeof $steps["goToTeam"] === "object" &&
                      typeof $steps["goToTeam"].then === "function"
                    ) {
                      $steps["goToTeam"] = await $steps["goToTeam"];
                    }
                  }}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__lxqfa)}
                    displayHeight={"136px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"318px"}
                    loading={"lazy"}
                    src={(() => {
                      try {
                        return currentItem.flag;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />

                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.title;
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
                </Stack__>
              );
            })}
          </Stack__>
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__xWmDf)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"70px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/proliga/images/group33Png.png",
            fullWidth: 582,
            fullHeight: 766,
            aspectRatio: undefined
          }}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "h1", "freeBox", "columns", "column", "text"],
  navbar: ["navbar"],
  h1: ["h1"],
  freeBox: ["freeBox", "columns", "column", "text"],
  columns: ["columns", "column", "text"],
  column: ["column", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  h1: "h1";
  freeBox: "div";
  columns: "div";
  column: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChampionships__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChampionships__VariantsArgs;
    args?: PlasmicChampionships__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChampionships__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChampionships__ArgsType,
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
          internalArgPropNames: PlasmicChampionships__ArgProps,
          internalVariantPropNames: PlasmicChampionships__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChampionships__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChampionships";
  } else {
    func.displayName = `PlasmicChampionships.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"}
      appId={"tDWy3GXn2mzd9e2xUaPdmu"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicChampionships = Object.assign(
  // Top-level PlasmicChampionships renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    h1: makeNodeComponent("h1"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicChampionships
    internalVariantProps: PlasmicChampionships__VariantProps,
    internalArgProps: PlasmicChampionships__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicChampionships;
/* prettier-ignore-end */
