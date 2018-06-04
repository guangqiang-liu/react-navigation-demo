# react-navigation导航组件使用详解

**注意了，如果有小伙伴们发现运行作者提供的react-navigation示例项目报如下的错误，可能是大家使用了 `yarn install ` 命令，解决这个错误的办法就是将nodemodules删除，然后使用`npm install `命令来安装，最后使用 `npm start` 来起服务，应该就不报错了，如果还有报错，请加作者交流群，将问题反馈到群里，谢谢。**

![](http://ovyjkveav.bkt.clouddn.com/18-6-4/76625586.jpg)

# RN技术总结
* 作者React Native开源项目OneM地址(按照企业开发标准搭建框架完成开发的)：**[https://github.com/guangqiang-liu/OneM](https://github.com/guangqiang-liu/OneM)** (欢迎小伙伴们 **star**)
* 作者简书主页：包含60多篇RN开发相关的技术文章[http://www.jianshu.com/u/023338566ca5](http://www.jianshu.com/u/023338566ca5) (欢迎小伙伴们：**多多关注**，**多多点赞**)
* 作者React Native QQ技术交流群：**620792950** 欢迎小伙伴进群交流学习
* 友情提示：**在开发中有遇到RN相关的技术问题，欢迎小伙伴加入交流群（620792950），在群里提问、互相交流学习。交流群也定期更新最新的RN学习资料给大家，谢谢支持！**

# 前言
> react-navigation 组件是官方推荐使用的导航组件，功能和性能都远远的优于之前的Navigator组件，公司的RN项目最早是使用的`react-native-router-flux`导航组件，因为那个时候`react-navigation` 组件还没有出来，在使用了`react-navigation`后，感觉比react-native-router-flux组件有更加强大的功能，体验也略好些，这两个导航组件是目前star最多的导航组件，并且他们都完美的支持与Redux框架的结合使用，推荐小伙伴们两个组件都尝试使用下。

# react-navigation官方地址
[react-navigation](https://github.com/react-community/react-navigation)

# react-navigation Demo地址
[https://github.com/guangqiang-liu/react-navigation-demo](https://github.com/guangqiang-liu/react-navigation-demo)

# react-navigation简书讲解地址
[http://www.jianshu.com/p/5c070a302192](http://www.jianshu.com/p/5c070a302192)

Demo示例讲解包含三部分

* react-navigation中最常用的基础用法讲解
* react-navigation中StackNavigator与TabNavigator和DrawerNavigator的混合嵌套使用
* react-navigation与Redux框架结合使用示例

# Demo效果图
![gif](http://upload-images.jianshu.io/upload_images/6342050-f286f704995f5081.jpg?imageMogr2/auto-orient/strip)

**注意： 有小伙伴说Demo运行报错，这里大家需要注意，Demo clone下来之后，我们先要执行 `npm install` 操作， 然后在执行 `react-native link`,最后在 执行 `npm start` 来运行项目，如果还有其他的报错信息，欢迎进群提出报错信息**

# 对Redux用法不熟悉的同学们，请看作者的Redux入门讲解
[http://www.jianshu.com/p/faa98d8bd3fa](http://www.jianshu.com/p/faa98d8bd3fa)

# react-navigation 主要组成
react-navigation 组件主要由三大部分组成

* StackNavigator：类似于iOS中的UINavigationController，顶部的导航栏，主要用于页面间的跳转
* TabNavigator：类似于iOS中的UITabBarController，底部的tabBar选项卡，主要用于在同一tab下的不同页面的切换
* DrawerNavigator：类似于iOS中常用的抽屉功能，抽屉导航栏

下面我们对`react-navigation`详解也主要围绕这三个API来展开

# StackNavigator
StackNavigator导航栏的工作原理就和iOS中原生的UINavigationController一样的，是以栈的方式来管理每一个页面控制器的，当使用push就是入栈，当使用pop操作时就是出栈，这个很好理解，如果我们想让一个页面控制器有导航栏，那么我们首先要做的就是给这个页面注册导航

*API*

`StackNavigator(RouteConfigs, StackNavigatorConfig)`

StackNavigator函数中有两个参数：

* RouteConfigs
* StackNavigatorConfig

*配置RouteConfigs*

```
const RouteConfigs = {
  Home: {
    screen: TabBar // screen属性为必须配置属性
  },
  Home2: {
    screen: Home2,
    path:'app/Home2',
    navigationOptions: {
      title: '这是在RouteConfigs中设置的title',
      headerTitleStyle: {
        fontSize: 10
      }
    }
  },
  Home3: { screen: Home3 },
  Home4: { screen: Home4 },
  Home5: {screen: Home5},
  Home6: {screen: Home6},
  Home7: {screen: Home7},
  Setting2: {screen: Setting2},
  Setting3: {screen: Setting3},
}
```

*配置StackNavigatorConfig*

```
const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 18, color: 'red'},
    headerStyle: {height: 49},
  },
  paths: 'page/main',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({
  })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始')
  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束')
  }),
}
```

*注册导航*

```
import {StackNavigator, TabNavigator} from "react-navigation"

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default class Main extends Component {
    render() {
        return (
            <Navigator/>
        )
    }
}
```

从上面注册导航的代码块中，我们可以看出StackNavigator函数接受两个配置对象`RouteConfigs ` 和 `StackNavigatorConfig `，但是这里需要注意，第二个参数StackNavigatorConfig可以省略，表示不做任何导航默认配置

**StackNavigatorConfig配置参数**

* `initialRouteName `：导航器组件中初始显示页面的路由名称，如果不设置，则默认第一个路由页面为初始显示页面
* `initialRouteParams`：给初始路由的参数，在初始显示的页面中可以通过`this.props.navigation.state.params`来获取
* `navigationOptions`：路由页面的全局配置项
* `paths `：RouteConfigs里面路径设置的映射
* `mode `：页面跳转方式，有card和modal两种，默认为 card
	* card：普通app常用的左右切换
	* modal：只针对iOS平台，类似于iOS中的模态跳转，上下切换
* `headerMode `：页面跳转时，头部的动画模式，有 float 、 screen 、 none 三种
	* float：渐变，类似iOS的原生效果，无透明，默认方式
	* screen：标题与屏幕一起淡入淡出，如微信QQ的一样
	* none：没有动画
* `cardStyle `：为各个页面设置统一的样式，比如背景色，字体大小等
* `transitionConfig `：配置页面跳转的动画，覆盖默认的动画效果
* `onTransitionStart `：页面跳转动画即将开始时调用
* `onTransitionEnd `：页面跳转动画一旦完成会马上调用

在StackNavigatorConfig配置参数中有一个`navigationOptions `属性的配置，这个配置项可以理解为导航栏的全局配置表，下面就讲解这个属性的可配置参数

**navigationOptions配置参数**

* `title `：导航栏的标题，或者Tab标题 tabBarLabel
* `header `：自定义的头部组件，使用该属性后系统的头部组件会消失，如果想在页面中自定义，可以设置为null，这样就不会出现页面中留有一个高度为64navigationBar的高度
* `headerTitle `：头部的标题，即页面的标题
* `headerBackTitle `：返回标题，默认为 title的标题
* `headerTruncatedBackTitle `：返回标题不能显示时（比如返回标题太长了）显示此标题，默认为'Back'
* `headerRight `：头部右边组件
* `headerLeft `：头部左边组件
* `headerStyle `：头部组件的样式
* `headerTitleStyle `：头部标题的样式
* `headerBackTitleStyle `：头部返回标题的样式
* `headerTintColor `：头部颜色
* `headerPressColorAndroid `：Android 5.0 以上MD风格的波纹颜色
* `gesturesEnabled `：否能侧滑返回，iOS 默认 true ， Android 默认 false

**navigationOptions**

```
// StackNavigatorConfig中的navigationOptions属性也可以在组件内用static navigationOptions 设置(会覆盖此处的设置)
navigationOptions: { 
        header: {  // 导航栏相关设置项
            backTitle: '返回',  // 左上角返回键文字
            style: {
                backgroundColor: '#fff'
            },
            titleStyle: {
                color: 'green'
            }
        },
        cardStack: {
            gesturesEnabled: true
        }
    }
```

注意：

* 我们也可以在`RouteConfigs `中配置 navigationOptions属性，我们也可以在单独页面配置navigationOptions
* 在页面里面采用静态的方式配置 navigationOptions属性，会覆盖StackNavigator函数中`RouteConfigs `和`StackNavigatorConfig `对象中的navigationOptions属性里面的对应属性
* navigationOptions中属性的优先级是：页面中静态配置 > RouteConfigs > StackNavigatorConfig 

*在`RouteConfigs `中配置 navigationOptions*

```
const RouteConfigs = {
  Home: {
    screen: TabBar
  },
  Home2: {
    screen: Home2,
    path:'app/Home2',
   // 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 具体参数详见下文
    navigationOptions: {
      title: '这是在RouteConfigs中设置的title',
      headerTitleStyle: {
        fontSize: 10
      }
    }
  },
  Home3: { screen: Home3 },
  Home4: { screen: Home4 },
  Home5: {screen: Home5},
  Home6: {screen: Home6},
  Home7: {screen: Home7},
  Setting2: {screen: Setting2},
  Setting3: {screen: Setting3},
}
```

*在具体页面中配置 navigationOptions*

```
import {StackNavigator, TabNavigator} from "react-navigation"

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default class Main extends Component {

	// 配置页面导航选项
    static navigationOptions = {
    title: 'homeThree',
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,  // 默认预设
      visible: true  // 覆盖预设中的此项
    }),
    cardStack: {
        gesturesEnabled: false  // 是否可以右滑返回
    }
}

	// 或这样
	static navigationOptions = {
    // title: 'Two', // 固定标题
    title: (navigation, childRouter) => {  // 动态标题
        if (navigation.state.params.isSelected) {
            return `${navigation.state.params.name}选中`;
        } else {
            return `${navigation.state.params.name}没选中`;
        }
    },
    header: ({ state, setParams, goBack }) => {
        let right;
        if (state.params.isSelected) {
            right = (<Button title="取消" onPress={() => setParams({ isSelected: false })}/>);
        } else {
            right = (<Button title="选择" onPress={() => setParams({ isSelected: true })}/>);
        }
        let left = (<Button title="返回" onPress={() => goBack()}/>);
        let visible = false;  // 是否显示导航栏
        return { right, left, visible };
    },
    // header: {left: <Button title="返回"/>},
    }
    
    render() {
        return (
            <Navigator/>
        )
    }
}
```

# TabNavigator

*API*

`TabNavigator(RouteConfigs, TabNavigatorConfig)`

从API上看，TabNavigator 和 StackNavigator 函数用法一样，都是接受RouteConfigs和TabNavigatorConfig这两个参数

**RouteConfigs配置参数**

路由配置和StackNavigator中一样，配置路由以及对应的 screen 页面，navigationOptions 为对应路由页面的配置选项

* `title `：Tab标题，可用作headerTitle 和 tabBarLabel 回退标题
* `tabBarVisible `：Tab的是否可见，默认为 true
* `tabBarIcon `：Tab的icon组件，可以根据 {focused: boolean, tintColor: string} 方法来返回一个icon组件
* `tabBarLabel `：Tab中显示的标题字符串或者组件，也可以根据{ focused: boolean, tintColor: string } 方法返回一个组件

*配置RouteConfigs*

```
const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  People: {
    screen: People,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'People',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Chat',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  }
}
```

**TabNavigatorConfig配置参数**

* `tabBarComponent `： Tab选项卡组件，有TabBarBottom和TabBarTop两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 
	* TabBarTop：在页面的顶部 
	* TabBarBottom：在页面的底部
* `tabBarPosition `：Tab选项卡的位置，有top或bottom两个值 
	* top：上
	* bottom：下
* `swipeEnabled `：是否可以滑动切换Tab选项卡
* `animationEnabled `：切换界面是否需要动画
* `lazy `：是否懒加载页面
* `initialRouteName `：初始显示的Tab对应的页面路由名称
* `order `：用路由名称数组来表示Tab选项卡的顺序，默认为路由配置顺序
* `paths `： 路径配置
* `backBehavior `：androd点击返回键时的处理，有initialRoute 和 none 两个值
	* initailRoute：返回初始界面 
	* none：退出
* `tabBarOptions `：Tab配置属性，用在TabBarTop和TabBarBottom时有些属性不一致
	* 用在TabBarTop时对应的属性：
		* activeTintColor：选中的文字颜色
		* inactiveTintColor：未选中的文字颜色
		* showIcon：是否显示图标，默认显示
		* showLabel：是否显示标签，默认显示
		* upperCaseLabel：是否使用大写字母，默认使用
		* pressColor：android 5.0以上的MD风格波纹颜色
		* pressOpacity：android 5.0以下或者iOS按下的透明度
		* scrollEnabled：是否可以滚动
		* tabStyle：单个Tab的样式
		* indicatorStyle：指示器的样式
		* labelStyle：标签的样式
		* iconStyle：icon的样式
		* style：整个TabBar的样式
	* 用在TabBarBottom时对应的属性：
		* activeTintColor：选中Tab的文字颜色
		* inactiveTintColor：未选中Tab的的文字颜色
		* activeBackgroundColor：选中Tab的背景颜色
		* inactiveBackgroundColor：未选中Tab的背景颜色
		* showLabel：是否显示标题，默认显示
		* style：整个TabBar的样式
		* labelStyle：标签的样式
		* tabStyle：单个Tab的样式
		
*使用TabBarTop代码示例*

```
import React, {Component} from "react";
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import HomeScreen from "./index18/HomeScreen";
import NearByScreen from "./index18/NearByScreen";
import MineScreen from "./index18/MineScreen";
export default class MainComponent extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const TabRouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
        }),
    },
    NearBy: {
        screen: NearByScreen,
        navigationOptions: {
            tabBarLabel: '附近',
        },
    }
    ,
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
        },
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    lazy: true,
    tabBarOptions: {}
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};
const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
};
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
```

*使用TabBarBottom代码示例*

```
import React, {Component} from 'react';
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import HomeScreen from "./index18/HomeScreen";
import NearByScreen from "./index18/NearByScreen";
import MineScreen from "./index18/MineScreen";
import TabBarItem from "./index18/TabBarItem";
export default class MainComponent extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const TabRouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/pfb_tabbar_homepage_2x.png')}
                    selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected_2x.png')}
                />
            ),
        }),
    },
    NearBy: {
        screen: NearByScreen,
        navigationOptions: {
            tabBarLabel: '附近',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/pfb_tabbar_merchant_2x.png')}
                    selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected_2x.png')}
                />
            ),
        },
    }
    ,
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/pfb_tabbar_mine_2x.png')}
                    selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected_2x.png')}
                />
            ),
        },
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};
const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
};
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
```

# DrawerNavigator

*API*

`DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)`

`DrawerNavigator `与`StackNavigator `和 `TabNavigator `函数的使用方式一样，参数配置也类似

路由配置和StackNavigator中一样，配置路由以及对应的 screen 页面，navigationOptions 为对应路由页面的配置选项

**RouteConfigs参数配置**

* `title `：抽屉标题，和headerTitle 、 drawerLabel一样
* `drawerLabel `：标签字符串，或者自定义组件，可以根据{ focused: boolean, tintColor: string } 函数来返回一个自定义组件作为标签
* `drawerIcon `：抽屉icon，可以根据 { focused: boolean, tintColor: string } 函数来返回一个自定义组件作为icon

**DrawerNavigatorConfig参数配置**

* `drawerWidth `：抽屉宽度，可以使用Dimensions获取屏幕的宽度动态计算
* `drawerPosition `：抽屉位置，可以是 left 或者 right
* `contentComponent `：抽屉内容组件，可以自定义侧滑抽屉中的所有内容，默认为 DrawerItems
* `contentOptions `：用来配置抽屉内容的属性。当用来配置 DrawerItems 是配置属性选项
	* items：抽屉栏目的路由名称数组，可以被修改
	* activeItemKey：当前选中页面的key id
	* activeTintColor：选中条目状态的文字颜色
	* activeBackgroundColor：选中条目的背景色
	* inactiveTintColor：未选中条目状态的文字颜色
	* inactiveBackgroundColor：未选中条目的背景色
	* onItemPress(route) ：条目按下时会调用此方法
	* style：抽屉内容的样式
	* labelStyle：抽屉的条目标题/标签样式
* `initialRouteName `：初始化展示的页面路由名称
* `order `：抽屉导航栏目顺序，用路由名称数组表示
* `paths `：路径
* `backBehavior `：androd点击返回键时的处理，有initialRoute和none两个值
	* initailRoute：返回初始界面
	* none ：退出 

**示例代码**

```
import React, {Component} from 'react';
import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import HomeScreen from "./index18/HomeScreen";
import NearByScreen from "./index18/NearByScreen";
import MineScreen from "./index18/MineScreen";
import TabBarItem from "./index18/TabBarItem";

const RouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            drawerLabel : '首页',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/pfb_tabbar_homepage_2x.png')}
                    selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected_2x.png')}
                />
            ),
        }),
    },
    NearBy: {
        screen: NearByScreen,
        navigationOptions: {
            drawerLabel : '附近',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/pfb_tabbar_merchant_2x.png')}
                    selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected_2x.png')}
                />
            ),
        },
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            drawerLabel : '我的',
            drawerIcon : ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/pfb_tabbar_mine_2x.png')}
                    selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected_2x.png')}
                />
            ),
        },
    }
};

const DrawerNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {}
};

const Drawer = DrawerNavigator(RouteConfigs, DrawerNavigatorConfigs)

const StackRouteConfigs = {
    Drawer: {
        screen: Drawer,
    }
};

const StackNavigatorConfigs = {
    initialRouteName: 'Drawer',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
}

const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs)

export default class Main extends Component {
    render() {
        return (
            <Navigator/>
        )
    }
}
```

# navigation
在StackNavigator中注册过的组件都有navigation这个属性，navigation有5个主要参数

* navigate
* state
* setParams
* goBack
* dispatch

我们平时使用react-navigation作为导航组件来开发时，经常使用到的也就是这5个属性的功能

**navigate**

*导航到下一个页面*

```
<Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home2界面'}
            onPress={() => this.props.navigation.navigate('Home2')}
          />
```

* 导航到下一个页面并传递参数

```
<Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home3界面，并传递参数'}
            // 这里传递了参数`id`
            onPress={() => this.props.navigation.navigate('Home3', {id: 123})}
          />
```

navigation中的navigate函数可以接受三个参数

* `routeName `：注册过的目标路由名称，也就是准备跳转到的页面路由地址(例如上面的`Home3`)
* `params `：跳转到下一个页面，传递的参数(例如上面的`id`)
* `action `：下文有讲到

**state**

`state`属性包含有传递过来的三个参数 params、key 、routeName

* `routeName `：注册过的目标路由名称
* `key `：路由身份标识
* `params `：跳转时传递的参数

获取state中的参数：`this.props.navigation.state.params.id` 这样就能拿到上一个页面传递的参数：`id`

**setParams**

`this.props.navigation.setParams()`: 该方法允许界面更改router中的参数，可以用来动态的更改导航栏的内容。比如可以用来更新头部的按钮或者标题等

使用场景：重写导航按钮的返回按钮，自定义返回事件

```
export default class Home5 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      title: 'Home5',
      headerLeft: (
        <Button
          title={'customAction'}
          onPress={() => navigation.state.params.customAction()}
        />
      )
    }
  )

  componentDidMount() {
    const {setParams} = this.props.navigation
    setParams({customAction: () => this.tempAction()})
  }

  tempAction() {
    alert('在导航栏按钮上调用Component内中的函数，因为static修饰的函数为静态函数，内部不能使用this')
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home5</Text>
      </View>
    )
  }
}
```

**goBack**

退出当前页面，返回到上一个页面，可以不传参数，也可以传参数，还可以传 null

* this.props.navigation.goBack();      // 回退到上一个页面
* this.props.navigation.goBack(null);   // 回退到任意一个页面
* this.props.navigation.goBack('Home');  // 回退到Home页面

```
<Button
      title={'返回上一页面'}
      onPress={() => goBack()}
        />
```

**dispatch**

`this.props.navigation.dispatch`: 可以dispatch一些action，主要支持的action有一下几种

* Navigate

```
import { NavigationActions } from 'react-navigation'

  const navigationAction = NavigationActions.navigate({
    routeName: 'Profile',
    params: {},

    // navigate can have a nested navigate action that will be run inside the child router
    action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
  })
  this.props.navigation.dispatch(navigationAction)
```

* Reset

Reset方法会清除原来的路由记录，添加上新设置的路由信息, 可以指定多个action，index是指定默认显示的那个路由页面, 注意不要越界了

```
import { NavigationActions } from 'react-navigation'

  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Profile'}),
      NavigationActions.navigate({ routeName: 'Two'})
    ]
  })
  this.props.navigation.dispatch(resetAction)
```

* SetParams

为指定的router更新参数，该参数必须是已经存在于router的param中

```
import { NavigationActions } from 'react-navigation'

  const setParamsAction = NavigationActions.setParams({
    params: {}, // these are the new params that will be merged into the existing route params
    // The key of the route that should get the new params
    key: 'screen-123',
  })
  this.props.navigation.dispatch(setParamsAction)
```

* Back

```
NavigationActions.back()
```

* Init

```
const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, actions) => {
    const nextState = Navigator.router.getStateForAction(actions, state);
    return nextState || state;
}
```

*注意：* 如果你的项目中使用了与Redux框架结合，这里的dispatch就可以派发任何你想dispatch的Action了

使用场景：[Counter 计数器](https://github.com/guangqiang-liu/react-navigation-demo)

```
class Counter extends Component {

  static navigationOptions = () => ({
    title: 'Counter加减计数器'
  })

  render() {
    const {dispatch} = this.props.navigation
    return (
      <View>
        <Text>Counter</Text>
        <Text style={{marginVertical: 20, color: 'red', fontSize: 30}}>{this.props.counterValue}</Text>
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'+'}
          onPress={() => dispatch(increaseAction())}
        />
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'-'}
          onPress={() => dispatch(decreaseAction())}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    counterValue: state.home.counter.counterValue
  }
}

export default connect(mapStateToProps)(Counter)
```

# 常用功能：页面跳转、页面传值、参数回调

**页面跳转与传值**

```
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home2界面'}
            onPress={() => this.props.navigation.navigate('Home2')}
          />
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home3界面，并传递参数'}
            onPress={() => this.props.navigation.navigate('Home3', {id: 123})}
          />
```

在下一界面接收参数，通过`this.props.navigation.state.params`接收参数

```
export default class Home3 extends Component {

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home3</Text>
        <Text style={{marginVertical: 20}}>{`Home界面传递的参数为：${this.props.navigation.state.params.id}`}</Text>
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'跳转到Home4界面'}
          onPress={() => navigate('Home4')}
        />
      </View>
    )
  }
}
```

**回调传参**

当前界面进行跳转，并传递参数

```
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home6界面，回调传参'}
            onPress={() => this.props.navigation.navigate('Home6',{callback: (response) => alert(response)})}
          />
```

下一界面在返回之前执行函数回调传参给上一个页面

```
    const {state, goBack} = this.props.navigation

        <Button
          title={'回调传参'}
          onPress={() => {
            state.params.callback && state.params.callback('这是回调参数')
            goBack()
          }}
        />
```

# DeepLink
其他app或浏览器使用url打开次app并进入指定页面，类似于iOS中的URL导航一样。如浏览器输入url OneM://home/home2直接进入home2页面

iOS平台需要额外配置

* 在info.plist文件中设置Schemes,示例中的Schemes为：OneM
* 在AppDelegate添加代理函数

```
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}
```

在js中配置

js组件在注册路由时设置唯一的路径path, 例如Home2: { screen: Home2, path:'home/Home2'}

在手机浏览器访问OneM://home/Home2, 弹窗选择打开, 就可以打开OneM app并进到Home2页面了

# 开发中遇到的问题及注意事项
* 默认DrawerView不可滚动。要实现可滚动视图，必须使用contentComponent自定义容器

```
{  
  drawerWidth：200, 
  contentComponent：props => <ScrollView> <DrawerItems {... props}></DrawerItems> </ ScrollView>  
}
```

* 可以覆盖导航使用的默认组件，使用DrawerItems自定义导航组件

```
import {DrawerItems} from 'react-navigation';  

const CustomDrawerContentComponent = (props) => (  
  <View style = {style.container}>  
    <DrawerItems {... props} />  
  </View>    
)
```

* 嵌套抽屉导航 如果嵌套DrawerNavigation，抽屉将显示在父导航下方

* 适配顶部导航栏标题

测试中发现，在iphone上标题栏的标题为居中状态，而在Android上则是居左对齐。所以需要我们修改源码，进行适配
【node_modules – react-navigation – src – views – Header.js】的326行代码处，修改为如下：

```
title: {  
   bottom: 0,  
   left: TITLE_OFFSET,  
   right: TITLE_OFFSET,  
   top: 0,  
   position: 'absolute',  
   alignItems: 'center',  
 } 
```

上面方法通过修改源码的方式其实略有弊端，毕竟扩展性不好。还有另外一种方式就是，在navigationOptions中设置headerTitleStyle的alignSelf为 ’ center ‘即可解决

* 去除返回键文字显示

【node_modules – react-navigation – src – views – HeaderBackButton.js】的91行代码处，修改为如下即可

```
{
   Platform.OS === 'ios' &&  
     title &&  
     <Text  
       onLayout={this._onTextLayout}  
       style={[styles.title, { color: tintColor }]}  
       numberOfLines={1}  
     >  
       {backButtonTitle}  
     </Text>
  } 
```

将上述代码删除即可

* 动态设置头部按钮事件

当我们在头部设置左右按钮时，肯定避免不了要设置按钮的单击事件，但是此时会有一个问题，navigationOptions是被修饰为static类型的，所以我们在按钮的onPress的方法中不能直接通过this来调用Component中的方法。如何解决呢？在官方文档中，作者给出利用设置params的思想来动态设置头部标题。那么我们可以利用这种方式，将单击回调函数以参数的方式传递到params，然后在navigationOption中利用navigation来取出设置到onPress即可：

```
export default class Home5 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      title: 'Home5',
      headerRight: (
        <Button
          title={'customAction'}
          onPress={() => navigation.state.params.customAction()}
        />
      )
    }
  )

  componentDidMount() {
    const {setParams} = this.props.navigation
    setParams({customAction: () => this.tempAction()})
  }

  tempAction() {
    alert('在导航栏按钮上调用Component内中的函数，因为static修饰的函数为静态函数，内部不能使用this')
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home5</Text>
      </View>
    )
  }
}
```

* 结合BackHandler处理返回和点击返回键两次退出App效果 

点击返回键两次退出App效果的需求屡见不鲜。相信很多人在react-navigation下实现该功能都遇到了很多问题，例如，其他界面不能返回。也就是手机本身返回事件在react-navigation之前拦截了。如何结合react-natigation实现呢？和大家分享两种实现方式：

1. 在注册StackNavigator的界面中，注册BackHandler

```
componentWillMount(){  
    BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid );  
}  


componentUnWillMount(){  
    BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);  
}  

_onBackAndroid=()=>{  
    let now = new Date().getTime();  
    if(now - lastBackPressed < 2500) {  
        return false;  
    }  
    lastBackPressed = now;  
    ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);  
    return true;  
} 
```

2. 监听react-navigation的Router

```
/** 
 * 处理安卓返回键 
 */  
const defaultStateAction = AppNavigator.router.getStateForAction;  
AppNavigator.router.getStateForAction = (action,state) => {  
    if(state && action.type === NavigationActions.BACK && state.routes.length === 1) {  
        if (lastBackPressed + 2000 < Date.now()) {  
            ToastAndroid.show(Constant.hint_exit,ToastAndroid.SHORT);  
            lastBackPressed = Date.now();  
            const routes = [...state.routes];  
            return {  
                ...state,  
                ...state.routes,  
                index: routes.length - 1,  
            };  
        }  
    }  
    return defaultStateAction(action,state);  
}
```

* 实现Android中界面跳转左右切换动画

react-navigation在android中默认的界面切换动画是上下。如何实现左右切换呢？很简单的配置即可：

```
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';  
```

然后在StackNavigator的配置下添加如下代码：

```
transitionConfig:()=>({  
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,  
}) 
```

* 解决快速点击多次跳转

当我们快速点击跳转时，会开启多个重复的界面，如何解决呢。其实在官方Git中也有提示，解决这个问题需要修改react-navigation源码： 
找到scr文件夹中的addNavigationHelpers.js文件,替换为如下文本即可：

```
export default function<S: *>(navigation: NavigationProp<S, NavigationAction>) {  
  // 添加点击判断  
  let debounce = true;  
  return {  
      ...navigation,  
      goBack: (key?: ?string): boolean =>  
          navigation.dispatch(  
              NavigationActions.back({  
                  key: key === undefined ? navigation.state.key : key,  
              }),  
          ),  
      navigate: (routeName: string,  
                 params?: NavigationParams,  
                 action?: NavigationAction,): boolean => {  
          if (debounce) {  
              debounce = false;  
              navigation.dispatch(  
                  NavigationActions.navigate({  
                      routeName,  
                      params,  
                      action,  
                  }),  
              );  
              setTimeout(  
                  () => {  
                      debounce = true;  
                  },  
              500,  
              );  
              return true;  
          }  
          return false;  
      },  
    /** 
     * For updating current route params. For example the nav bar title and 
     * buttons are based on the route params. 
     * This means `setParams` can be used to update nav bar for example. 
     */  
    setParams: (params: NavigationParams): boolean =>  
      navigation.dispatch(  
        NavigationActions.setParams({  
          params,  
          key: navigation.state.key,  
        }),  
      ),  
  }
}
```

# 待补充问题
* hook tabBar上点击事件
* Android物理返回键处理
* navigator与tabBar嵌套
* tabBar上添加badge
* pop多层页面
* pop到指定页面
* navigator与抽屉嵌套使用
* 导航title 在Android 平台上不居中显示
* 双击物理键，退出app
* 懒加载tabbar上数据


# 针对上面的待补充问题，下面来逐一解答
* hook tabBar上点击事件

> 有时我们点击tabBar上的tab来切换页面，但是在切换页面之前我们想先做一些逻辑处理，然后在切换到tab页面，这时我们就需要先hook到这个tab的点击事件，下面代码块就是告诉你如何hook到tab的点击事件，处理完事件在打开tab页面，这个使用具体使用方式在示例Demo中都有实际使用，不清楚的同学们直接去运行示例项目了解即可

```
Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Chat',
      tabBarOnPress: () => {
        Alert.alert(
            '注意！',
            '这里做了hook tabBar的点击事件操作，我们可以hook到这个点击事件，处理我们想要处理的业务后再打开 Chat这个页面',
            [
              {text: '打开tab页面', onPress: () => navigation.navigate('Chat')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
        )
      },
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
```

* Android物理返回键处理（待更新）

* navigator与tabBar嵌套

> navigator与tabBar嵌套 具体的结合使用方式示例Demo中有给出具体示例，这个同学们直接运行示例Demo查看即可

* tabBar上添加badge

> 之前有不少同学问我，怎么给一个tabBar设置badge，前段时间由于太忙，一直没有去处理这个问题，后面去实现了下自定义badge，感觉还是挺简单的，因为navigation的tabBarItem本来就是支持自定义的，既然能够自定义，那实现badge自然也是可行的了，下面就是具体实现代码块

```
People: {
    screen: People,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'People',
      tabBarIcon: ({ focused, tintColor }) => (
          <View style={{position: 'absolute', top: -10}}>
            <Ionicons
                name={focused ? 'ios-people' : 'ios-people-outline'}
                size={26}
                style={{ color: tintColor }}/>
            <View style={{backgroundColor: 'red', position: 'absolute', right: -10, top: -5, height: 15, width: 20, borderRadius: 8, overflow: 'hidden'}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>10</Text>
            </View>
          </View>
      )
    }),
  },
```

* pop多层页面

> 有时候我们在开发的时候，难免会遇到在点击返回按钮的时候，想直接返回到指定的某一个页面，而不是返回上一级页面，这时我们就需要对goback(）函数做些处理了，具体的代码实现如下

```
const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

const defaultStateAction = Navigator.router.getStateForAction;

Navigator.router.getStateForAction = (action, state) => {
  if (state && action.key && action.type === 'Navigation/BACK') {
    const desiredRoute = state.routes.find((route) => route.routeName === action.key)
    if (desiredRoute) {
      const index = state.routes.indexOf(desiredRoute)
      const finalState = {
        ...state,
        routes: state.routes.slice(0, index + 1),
        index: index,
      };
      return finalState
    } else {
      if (state.routes.length > action.key) {
        const stacksLength = state.routes.length - action.key
        const stacks = state.routes.slice(0, stacksLength)
        const finalState = {
          ...state,
          routes: stacks,
          index: stacksLength - 1,
        };
        return finalState
      }
    }
  }
  return defaultStateAction(action, state)
}
```

* pop到指定页面

> 其实goback()函数，是很容易的就可以做到返回到指定页面，和返回指定层级的页面的，并不像网上其他的文章说的需要改源码啊，或者是需要结合redux才能实现啊，并不是这样的，只需要我们简单的维护下导航的路由栈即可解决问题，这个其实和原生iOS中处理导航的栈管理是一个道理

```
const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

const defaultStateAction = Navigator.router.getStateForAction;

Navigator.router.getStateForAction = (action, state) => {
  if (state && action.key && action.type === 'Navigation/BACK') {
    const desiredRoute = state.routes.find((route) => route.routeName === action.key)
    if (desiredRoute) {
      const index = state.routes.indexOf(desiredRoute)
      const finalState = {
        ...state,
        routes: state.routes.slice(0, index + 1),
        index: index,
      };
      return finalState
    } else {
      if (state.routes.length > action.key) {
        const stacksLength = state.routes.length - action.key
        const stacks = state.routes.slice(0, stacksLength)
        const finalState = {
          ...state,
          routes: stacks,
          index: stacksLength - 1,
        };
        return finalState
      }
    }
  }
  return defaultStateAction(action, state)
}
```

* navigator与抽屉嵌套使用

> navigator与抽屉嵌套使用的方式，示例Demo中已经有具体实现了，这个比较简单，就不做详细解答了

* 导航title 在Android 平台上不居中显示
> 简书上面的**开发中遇到的问题及注意事项**中有讲解决办法，不过作者还是建议大家将导航栏封装成一个组件，使用自定义的组件灵活性更高

* 双击物理键，退出app（待更新）

* 懒加载tabbar上数据

> 这个懒加载Tab，这个也没有什么好解答的，官方已经给我提供了设置属性，我们只需要设置个属性即可，具体代码如下

```
const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
}
```

# 总结

> react-navigation导航组件的API相对较多，如果小伙伴们看完讲解还是不清楚如何使用，建议直接运行Demo项目，边调试边理解。

**针对之前很多同学反映出关于react-navigation 使用上遇到的一些问题，上面基本上都逐一解答了，并且都在示例Demo实战的测试过是可行方案，后期还有其他的小伙伴遇到使用上的问题，欢迎进群讨论，或者是给我简书留言，谢谢大家的支持。**


# 简书地址
[http://www.jianshu.com/p/5c070a302192](http://www.jianshu.com/p/5c070a302192)