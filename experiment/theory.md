### Introduction

### Stuck at fault

<p style="text-align:justify;">After manufacturing a chip, the number of physical defects in a chip can be too many i.e., may be infinitely large. So many times, this is impossible to count and analyze all possible faults. So, while testing a circuit / IC we abstract physical defects and define some logical fault models.</p>

In this way
<ul>
<li>It reduces the number of faults to be considered.</li>
<li>Makes test generation and fault simulation possible.</li>
<li>We can quantitatively compare test-sets to minimize the faults as minimum as possible.</li>
</ul>

<p style="text-align:justify;"><strong>Note:</strong> Defining fault models doesn’t mean circuit has these faults. We only assume that circuit is behaving like that.</p>

<p style="text-align:justify;">There are different levels of abstraction of fault modelling: Behavioural, Functional, Structural, Switch level, Geometrical.
Among these, the stuck at fault model comes under structural level fault model and there are 2 types of stuck at fault modelling: Single stuck at fault modelling, Multiple stuck at fault modelling.</p>

Among these two, single stuck at fault modelling is most popular. why?

1. Due to simplicity of single stuck at model it has been widely used to taste ICs.
2. Some interesting results that A test set that detect all single stuck at fault detect about >95% of multiple stuck at fault.
3. For tree like circuit, it detects all multiple stuck at faults.

### Decoder 

<p style="text-align:justify;">Decoder is a combinational logic circuit that converts the binary information from n coded inputs to a maximum of 2<sup>n</sup> unique outputs.</p>p>

 <center><img src="./images/2.png"/></center>

<p style="text-align:justify;">Sometimes an additional input is given as "Enable" to activate the circuit, it activates when enable input is at logic level "1" and deactivates when it is at logic level "0". Basically it decodes the coded binary inputs to corresponding output. As n bits can represent 2^n numbers similarly here n inputs represent a single output as "1" and other outputs as "0".</p>

### 4x16 decoder using 3x8 decoder 

<p style="text-align:justify;">The parallel inputs A0, A1 & A2are applied to each 3x8 decoder along with an enable input A3, which accordingly activates the two decoders as it becomes '0' and '1' respectively. The outputs D0 to D7 (the first eight minterms) are corresponding to enable at '0' and outputs D8 to D15 (the last eight minterms) are corresponding to enable at '1'.</p>

 <center><img src="images/3x18to4x16.png"/></center>

### Effect of stuck at fault 

<p style="text-align:justify;">In the circuit, when there is no stuck at fault, it behaves correctly. but, it's impossible to get a digital circuit without stuck at faults, however we can detect these up to an extent using different detection techniques. These techniques tests different test sets to detect the stuck at fault at different position. To minimize the no of test sets we use different laws i.e Law of dominance, Law of equivalence etc. because test sets increase exponentially as no of input lines, output lines and fan-out branches increase. A circuit with many fault lines behaves abnormally, because these lines stuck at a particular fault logic. And for proper functioning of the circuit, it should contain as less stuck at faults as possible.</p>

 <center><img src="images/saf-de.png"/></center>

 <p style="text-align:justify;">In the above figure stuck at fault 1 at position 11, 12 and 28, producing abnormal output for the 4x16 decoder.</p>
