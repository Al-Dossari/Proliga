// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: IAM42mYRBrPY

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
import TextInput from "../../TextInput"; // plasmic-import: xwgFLXqL07mD/component
import Button from "../../Button"; // plasmic-import: H0AldfR-bP7i/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicCreateTeam.module.css"; // plasmic-import: IAM42mYRBrPY/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: TfB627kbYt5s/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 6EplYmkkN57M/icon

createPlasmicElementProxy;

export type PlasmicCreateTeam__VariantMembers = {};
export type PlasmicCreateTeam__VariantsArgs = {};
type VariantPropType = keyof PlasmicCreateTeam__VariantsArgs;
export const PlasmicCreateTeam__VariantProps = new Array<VariantPropType>();

export type PlasmicCreateTeam__ArgsType = {};
type ArgPropType = keyof PlasmicCreateTeam__ArgsType;
export const PlasmicCreateTeam__ArgProps = new Array<ArgPropType>();

export type PlasmicCreateTeam__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h1?: Flex__<"h1">;
  freeBox?: Flex__<"div">;
  textInput?: Flex__<typeof TextInput>;
  button?: Flex__<typeof Button>;
};

export interface DefaultCreateTeamProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCreateTeam__RenderFunc(props: {
  variants: PlasmicCreateTeam__VariantsArgs;
  args: PlasmicCreateTeam__ArgsType;
  overrides: PlasmicCreateTeam__OverridesType;
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "userId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return currentUser.customProperties.response[0].id;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 0;
              }
              throw e;
            }
          })()
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
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "0bcc7d72-019e-4b90-a8ad-94c8fe48b6d6",
        userArgs: {
          params: [$ctx.params.id]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return undefined;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.0bcc7d72-019e-4b90-a8ad-94c8fe48b6d6.$.`,
        invalidatedKeys: null,
        roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
      };
    }),
    userTeam: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "ba32d575-2722-4877-a05b-28e1d320d7b7",
        userArgs: {
          params: [$state.userId, $queries.query.data.response[0].id]
        },
        cacheKey: `plasmic.$.ba32d575-2722-4877-a05b-28e1d320d7b7.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__m7OAd)}>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={(() => {
                  try {
                    return $queries.query.data.response[0].flag;
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
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__q3FjT)}
            >
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
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        "ФЭНТЕЗИ\n " + $queries.query.data.response[0].title
                      );
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
              </h1>
              <Stack__
                as={"div"}
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <TextInput
                  data-plasmic-name={"textInput"}
                  data-plasmic-override={overrides.textInput}
                  autoFocus={false}
                  className={classNames("__wab_instance", sty.textInput)}
                  name={``}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ["textInput", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }}
                  placeholder={
                    "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0432\u043e\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"
                  }
                  required={true}
                  type={"text"}
                  value={
                    generateStateValueProp($state, ["textInput", "value"]) ?? ""
                  }
                />

                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  color={"green"}
                  onClick={async event => {
                    const $steps = {};

                    $steps["useIntegration"] = true
                      ? (() => {
                          const actionArgs = {
                            dataOp: {
                              sourceId: "vQtRPuFArSfh43vUmgx2PS",
                              opId: "9d0a283d-80c7-4755-a124-b82655a12dc1",
                              userArgs: {
                                params: [$queries.query.data.response[0].id],
                                body: [$state.textInput.value]
                              },
                              cacheKey: null,
                              invalidatedKeys: ["plasmic_refresh_all"],
                              roleId: null
                            }
                          };
                          return (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                {
                                  userAuthToken: dataSourcesCtx?.userAuthToken,
                                  user: dataSourcesCtx?.user
                                }
                              );
                              await plasmicInvalidate(dataOp.invalidatedKeys);
                              return response;
                            } catch (e) {
                              if (!continueOnError) {
                                throw e;
                              }
                              return e;
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["useIntegration"] != null &&
                      typeof $steps["useIntegration"] === "object" &&
                      typeof $steps["useIntegration"].then === "function"
                    ) {
                      $steps["useIntegration"] = await $steps["useIntegration"];
                    }

                    $steps["goToEditTeam"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: `/team-2/${(() => {
                              try {
                                return $queries.userTeam.data.response[0].id;
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
                      $steps["goToEditTeam"] != null &&
                      typeof $steps["goToEditTeam"] === "object" &&
                      typeof $steps["goToEditTeam"].then === "function"
                    ) {
                      $steps["goToEditTeam"] = await $steps["goToEditTeam"];
                    }
                  }}
                >
                  {"\u0418\u0433\u0440\u0430\u0442\u044c"}
                </Button>
              </Stack__>
            </Stack__>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "columns",
    "img",
    "h1",
    "freeBox",
    "textInput",
    "button"
  ],
  navbar: ["navbar"],
  columns: ["columns", "img", "h1", "freeBox", "textInput", "button"],
  img: ["img"],
  h1: ["h1"],
  freeBox: ["freeBox", "textInput", "button"],
  textInput: ["textInput"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  columns: "div";
  img: typeof PlasmicImg__;
  h1: "h1";
  freeBox: "div";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCreateTeam__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCreateTeam__VariantsArgs;
    args?: PlasmicCreateTeam__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCreateTeam__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCreateTeam__ArgsType,
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
          internalArgPropNames: PlasmicCreateTeam__ArgProps,
          internalVariantPropNames: PlasmicCreateTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCreateTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCreateTeam";
  } else {
    func.displayName = `PlasmicCreateTeam.${nodeName}`;
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

export const PlasmicCreateTeam = Object.assign(
  // Top-level PlasmicCreateTeam renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    freeBox: makeNodeComponent("freeBox"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCreateTeam
    internalVariantProps: PlasmicCreateTeam__VariantProps,
    internalArgProps: PlasmicCreateTeam__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCreateTeam;
/* prettier-ignore-end */
